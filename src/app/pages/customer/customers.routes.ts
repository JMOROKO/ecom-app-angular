import {Routes} from '@angular/router';
import {CustomerComponent} from './components/customer-list/customer.component';
import {ErreurComponent} from '../erreur/erreur.component';
import {AddCustomerComponent} from './components/add-customer/add-customer.component';
import {EditCustomerComponent} from './components/edit-customer/edit-customer.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: 'list',
    component: CustomerComponent
  },
  {
    path: 'add',
    component: AddCustomerComponent
  },
  {
    path: 'edit/:id',
    component: EditCustomerComponent
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
