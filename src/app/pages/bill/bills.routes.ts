import {Routes} from '@angular/router';
import {ErreurComponent} from '../erreur/erreur.component';
import {BillComponent} from './bill-list/bill.component';

export const BILLS_ROUTES: Routes = [
  {
    path: 'list',
    component: BillComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErreurComponent
  },
]
