import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatTabsModule,
} from '@angular/material';

import { ShipRoutingModule } from './ship-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { containers } from './containers';

// import { ShipDialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    SharedModule,
    ShipRoutingModule,
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
  ]
})
export class ShipModule { }
