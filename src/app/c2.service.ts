import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class C2Service {


  public cartItemList: any = [];
  public price :any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(public http:HttpClient) {}

  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  //menu to cart 
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }


  
  getTotalPrice(): number {
    let GrandTotal = 0;
    
    this.cartItemList.map((a: any) => {
   
      GrandTotal += a.total;
    });
    return GrandTotal;
    
  }



  getPrice(): number{
    let price = 0
    this.cartItemList.map((a: any) => {
   
      price = a.total;
    });
    
    return price;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        
      }
    });
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  // end of methods for menu items to cart 



//discount get 
  getdis() {
    return this.http.get('http://localhost:7050/testingall' );
  }
//


  // pushcart(paymentdet:any) {
  //   return this.http.post('http://localhost:7050/push', paymentdet);
  // }



  // getcart() {
  //   return this.http.get('http://localhost:7050/get' );
  // }



  addpay(paymentdet:any) {
    return this.http.post('http://localhost:7050/payment', paymentdet);
  }


}


