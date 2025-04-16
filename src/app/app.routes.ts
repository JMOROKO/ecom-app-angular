import { Routes } from '@angular/router';
import {TemplateComponent} from './pages/template/template.component';
import {ErreurComponent} from './pages/erreur/erreur.component';

export const routes: Routes = [
  {
    path: 'app',
    component: TemplateComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () =>
          import('./pages/customer/customers.routes').then(
            (m) => m.CUSTOMER_ROUTES
          )
      },
      {
        path: 'inventories',
        loadChildren: () =>
          import('./pages/product/products.routes').then(
            (m) => m.PRODUCTS_ROUTES
          )
      },
      {
        path: 'bills',
        loadChildren: () =>
          import('./pages/bill/bills.routes').then(
            (m) => m.BILLS_ROUTES
          )
      },
      {
        path: '**',
        component: ErreurComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/customers/list',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErreurComponent
  }
];
