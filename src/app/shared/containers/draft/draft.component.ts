import { Component, OnInit } from '@angular/core';

type Link = {
  path: string;
  label: string;
}

@Component({
  selector: 'draft-shipment-page',
  templateUrl: './draft.component.html',
})
export class DraftComponent implements OnInit {
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
