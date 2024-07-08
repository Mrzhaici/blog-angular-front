import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./routes/home/home.routes').then(mod => mod.HomeRoutes),
    title: 'nihao'
  },
];



