import { Component, OnInit } from '@angular/core';
import { C2Service } from '../c2.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    public mS: MenuService,
    
    public c2service: C2Service
  ) {}

  //r
  menus: any[] = [];


  //r
  ngOnInit(): void {
    this.mS.getAllMenu().subscribe((data: any) => {
      this.menus = data;

      this.menus.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }


  //r
  //menu to cart 
  addToCart(menu: any) {
    this.c2service.addToCart(menu);
  }//end of menu to cart 


}