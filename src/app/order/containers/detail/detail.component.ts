import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { ShipDialog } from '../../dialogs/ship/ship.dialog';

@Component({
  selector: 'order-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent{
  private _dialogRef: MatDialogRef<ShipDialog>;

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
  ) { }

  ship(): void {
    this._dialogRef = this._dialog.open(ShipDialog, {
      width: '95%',
    });
    this._dialogRef.afterOpened().subscribe(() => {
      // TODO: we need to pass the order data to the popup and display Ship.OrderDraftComponent instead of Ship.DraftComponent
      this._router.navigate(['', { outlets: { popup: ['fulfill'] }}]);
    })
    this._dialogRef.afterClosed().subscribe(() => {
      this._router.navigate(['', { outlets: { popup: null }}]);
    })
  }

}
