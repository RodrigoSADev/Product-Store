import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { AddComponent } from './features/add/add.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./features/add/add.component').then((m) => m.AddComponent),
  },
];
