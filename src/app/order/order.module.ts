import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from '@angular/material';

import { OrderRoutingModule } from './order-routing.module';
import { containers } from './containers';
import { dialogs } from './dialogs';

@NgModule({
  declarations: [
    ...containers,
    ...dialogs,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    OrderRoutingModule
  ],
  entryComponents: [
    ...dialogs,
  ],
  exports: [
    ...dialogs,
  ]
})
export class OrderModule { }
