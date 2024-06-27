import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import {
  getAllProductsResolver,
  getProductByIdResolver,
} from './shared/resolvers/resolvers';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getAllProductsResolver,
    },
    component: ListComponent,
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./features/add/add.component').then((m) => m.AddComponent),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: getProductByIdResolver,
    },
    loadComponent: () =>
      import('./features/edit/edit.component').then((m) => m.EditComponent),
  },
];
