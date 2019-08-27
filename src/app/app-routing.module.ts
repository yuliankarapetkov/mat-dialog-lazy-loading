import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ship',
    pathMatch: 'full',
  },
  {
    path: 'ship',
    loadChildren: './ship/ship.module#ShipModule',
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'fulfill',
    loadChildren: './ship/ship.module#ShipModule',
    outlet: 'popup',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
