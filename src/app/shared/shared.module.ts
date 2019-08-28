import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTabsModule } from '@angular/material';

import { containers } from './containers';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    RouterModule
  ],
  declarations: [
    // ShipDialogComponent,
    ...containers,
  ],
  entryComponents: [
    // ShipDialogComponent,
    ...containers
  ],
  exports: [
    // ShipDialogComponent
    ...containers
  ]
})
export class SharedModule {

}
