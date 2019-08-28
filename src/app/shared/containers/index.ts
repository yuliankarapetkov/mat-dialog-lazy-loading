import { DraftComponent } from './draft/draft.component';
import { OrderDraftComponent } from './order-draft/order-draft.component';
import { FromComponent } from './from/from.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { RatesComponent } from './rates/rates.component';
import { ToComponent } from './to/to.component';

export const containers = [
    DraftComponent,
    OrderDraftComponent,
    FromComponent,
    ParcelsComponent,
    RatesComponent,
    ToComponent,
];

export * from './draft/draft.component';
export * from './order-draft/order-draft.component';
export * from './from/from.component';
export * from './parcels/parcels.component';
export * from './rates/rates.component';
export * from './to/to.component';
