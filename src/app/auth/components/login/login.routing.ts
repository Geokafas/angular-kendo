import { Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { LoginComponent } from './login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate:[AuthGuard]
    }
];