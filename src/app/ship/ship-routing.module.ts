import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ShipDialogComponent } from './dialog/dialog.component';
import {
  DraftComponent,
  FromComponent,
  ToComponent,
  ParcelsComponent,
  RatesComponent,
} from '../shared/containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'draft/from',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: DraftComponent,
    children: [
      {
        path: 'from',
        component: FromComponent,
      },
      {
        path: 'to',
        component: ToComponent,
      },
      {
        path: 'parcels',
        component: ParcelsComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipRoutingModule { }
