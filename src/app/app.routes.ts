import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { AddComponent } from './features/add/add.component';
import { ListComponent } from './features/list/list.component';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: () => {
        const productService = inject(ProductsService);
        return productService.getAll();
      },
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
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productService = inject(ProductsService);
        return productService.getById(route.paramMap.get('id') as string);
      },
    },
    loadComponent: () =>
      import('./features/edit/edit.component').then((m) => m.EditComponent),
  },
];
