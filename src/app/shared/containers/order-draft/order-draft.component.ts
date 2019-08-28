import { Component, OnInit } from '@angular/core';

type Link = {
  path: string;
  label: string;
}

@Component({
  selector: 'order-draft-shipment-page',
  templateUrl: './order-draft.component.html',
})
export class OrderDraftComponent implements OnInit {
  navLinks: Link[] = [
    { path: 'from',    label: 'From' },
    { path: 'to',      label: 'To' },
    { path: 'parcels', label: 'Parcels' },
    { path: 'rates',   label: 'Rates' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
