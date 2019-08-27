import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  DetailComponent,
} from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'detail'
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
