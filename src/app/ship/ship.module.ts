import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatTabsModule,
} from '@angular/material';

import { ShipRoutingModule } from './ship-routing.module';
import { containers } from './containers';

// import { ShipDialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    ShipRoutingModule,
  ],
  declarations: [
    // ShipDialogComponent,
    ...containers,
  ],
  entryComponents: [
    // ShipDialogComponent,
  ],
  exports: [
    // ShipDialogComponent
  ]
})
export class ShipModule { }
