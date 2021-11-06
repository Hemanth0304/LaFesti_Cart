import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(public http: HttpClient) {}
  getAllMenu() {
    return this.http.get(
      'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json'
    );
  }
}