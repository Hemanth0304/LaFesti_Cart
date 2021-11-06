import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C2Component } from './c2/c2.component';
import { MenuComponent } from './menu/menu.component';

import { PayformComponent } from './payform/payform.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'payment',
      component: PayformComponent
    },
    {
      path: '',
      component: MenuComponent

    },
    {
      path: 'c2',
      component:C2Component
    }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
