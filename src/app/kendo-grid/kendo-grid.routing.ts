import { Routes } from '@angular/router';
import { AuthGuard } from './guards/kendo-grid.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { KendoGridComponent } from './kendo-grid.component';

export const routes: Routes = [
  {
    path: '',
    component: KendoGridComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ResolveGuard,
    },
  },
];
