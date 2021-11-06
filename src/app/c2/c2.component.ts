import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { C2Service } from '../c2.service';
import { PaymentService } from '../payment.service';
import { PayservService } from '../payserv.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
   //send items to db
   public products: any=[];
   public grandtotal !: number ; 
   public tt !: number;
   //

  price: any;
  
  dis: any;
products2:any ;

  Ft = this.grandtotal;


  constructor(public fb: FormBuilder, public lr: PayservService,
    public router:Router , private c2 :C2Service , private p2 :PaymentService) 
    {
      
    } 

    promos: any;
    submitted = false;

    addtopay(Ft: any) {
      this.p2.addtopay(Ft);
    }
     
  // -------------------------------------------------

// -------------------------------------------------
a:any  = this.products[0];

public fooditems = this.products.type;


//  t:any = this.price;

gt = this.grandtotal;

    ngOnInit(): void {

      


      this.c2.getProducts().subscribe(res=>{
        this.products = res; 
        this.grandtotal = this.c2.getTotalPrice();
        this.tt =this.c2.getPrice();
        
        console.log("a:",this.grandtotal);
        console.log("a:",this.price);
        
      })


      this.dis="";
      this.c2.getdis().subscribe((data) => {
        this.dis = data;
        console.log(this.dis)
      });

      //send to food items to db
      this.lr.addfood(this.products).subscribe((data) => { });






       // ----------OFFERS AND DISCOUNTS -----------
// -------------------------------------------------
      this.promos = this.fb.group({
        name: ['',Validators.required]
       
      })
      this.products2=this.products.value
     }
     //Oninit End 
    
    //  ------------------

     get name() {
      return this.promos.controls['name'];
      
    }
    // discount ----
    discountval() 
    {
      for(var i of this.dis) {
        console.log(this.dis);
        
        if(i.name === this.name.value){
        
          // console.log("discountttt", this.grandtotal)

          alert("Discount Coupon Applied");
          this.grandtotal = this.grandtotal - 50;
          break;

      }
      else {
        console.log("discount",this.name);
        
       alert("Invalid Coupon Code");
      }
     }
    }



// -----------------------------------------
// -----------------------------------------
    // -----------------------------------------
    //------
    discount() {
      this.lr.chk(this.promos.value).subscribe((data) => {
        alert("Successful")
        this.router.navigate(["/"])
        
      });
    }

    // addtodb(){
    //   this.c2.pushcart(this.products2).subscribe((data)=>{ });
    // }

    removeItem(item:any){
      this.c2.removeCartItem(item);
      this.tt =this.c2.getPrice() - this.products.price;

      
    }
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------



  addLike = 1;
  price1 = 200;
  res=200;
  price2 =180;
  res2=180;
  price3 =300;
  res3=300;
 
  total = this.res + this.res2+ this.res3;

  l=1;
  like() {
    this.l = Number(this.addLike++);
    
    this.res = Number(this.l) * Number(this.price1);
    this.total = Number(this.res) + Number(this.res3)+ Number(this.res2);
    return this.total;
    return this.res;
    return this.l;
   
  }

  dislike(): any {
    this.l = Number(--this.addLike);
    this.res = Number(this.l) * Number(this.price1);
    this.total = Number(this.res) + Number(this.res3)+ Number(this.res2);
    return Math.abs(this.total);
    return Math.abs(this.res);
    return this.l;
    
  }



///plus Minus Button
  // ad= 1;
  // l2=  1;
  // res2 = this.carts.Price;
  // total = this.carts.Price;

  

  // plus() {
  //   this.l2 = Number(this.ad++);
    
  //   this.res2 = Number(this.l2) * Number(this.carts.Price);
  //   this.total = Number(this.res)  ;
  //   return Math.abs(this.total);
  //   return this.res2;
  //   return this.l2;
    
  // }
  // minus() {
  //   this.l2 = Number(--this.ad);

  //     this.res2 = Number(this.l2) * Number(this.carts.Price);
  //   this.total = Number(this.res)  ;
  //   return Math.abs(this.total);
  //   return this.res2;
  //   return this.l2;
  // }
  
////END PLUS MINUS BUTTON



  addLike3 = 1;
  l3=1;

 
  
 
  plus() {
    this.l3 = Number(this.addLike++);
    
    this.res3 = Number(this.l3) * Number(this.price3);
    this.total = Number(this.res) + Number(this.res3)+ Number(this.res2);
    return this.total;
    return this.res3;
    return this.l3;
  }

 minus(): any {
    this.l3 = Number(--this.addLike);
    this.res3 = Number(this.l3) * Number(this.price3);
    this.total = Number(this.res) + Number(this.res3)+ Number(this.res2);
    return Math.abs(this.total);
    return Math.abs(this.res3);
    return this.l;
    
  }



  dicsount1(): any{
    this.grandtotal  = Number(this.grandtotal) / 2 ;
    return Math.abs(this.grandtotal );
  }

  discount2= 200;
  dicsount2(): any{
    this.grandtotal = Number(this.grandtotal) - Number(this.discount2) ;
    return Math.abs(this.grandtotal);
  }


  discount3= 300;
  dicsount3(): any{
    this.grandtotal = Number(this.grandtotal) - Number(this.discount3) ;
    return Math.abs(this.grandtotal);
  }


  dicsount4(): any{
    this.grandtotal = Number(this.grandtotal) - Number(this.grandtotal) ;
    return Math.abs(this.grandtotal);
  }

  clicked = false;

  
 
}