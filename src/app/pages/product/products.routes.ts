import {Routes} from '@angular/router';
import {ErreurComponent} from '../erreur/erreur.component';
import {ProductComponent} from './product-list/product.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'list',
    component: ProductComponent
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
