import {Routes} from '@angular/router';
import {CustomerComponent} from './customer-list/customer.component';
import {ErreurComponent} from '../erreur/erreur.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: 'list',
    component: CustomerComponent
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
