import { Routes } from "@angular/router";
import { ErrorPageComponent } from "./errorPage/error-page.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'grid', 
    loadChildren: () => import('./kendo-grid/kendo-grid.module').then(m => m.KendoGridModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];
