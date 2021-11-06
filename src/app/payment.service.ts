import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  public cartitems : any=[]
  public products =new BehaviorSubject<any>([]);

  constructor() { }

  getlist(){
    return this.products.asObservable();
  }

  setlist(list: any){
    this.cartitems.push(...list);
    this.products.next(list);
  }

  addtopay(list:any){
    this.cartitems.push(list);
    this.products.next(this.cartitems);
    
  }
}
