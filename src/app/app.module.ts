import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

import { C2Component } from './c2/c2.component';
import { HurrayComponent } from './hurray/hurray.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { P2Component } from './p2/p2.component';
import { MenuComponent } from './menu/menu.component';
import { PayformComponent } from './payform/payform.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
   
    C2Component,
    HurrayComponent,
    P2Component,
    MenuComponent,
    PayformComponent
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
