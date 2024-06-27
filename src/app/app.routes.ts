import { Routes } from '@angular/router';
import { AddComponent } from './features/add/add.component';
import { ListComponent } from './features/list/list.component';

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
  {
    path: 'edit-product',
    loadComponent: () =>
      import('./features/edit/edit.component').then((m) => m.EditComponent),
  },
];
