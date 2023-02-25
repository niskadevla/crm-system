import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { ROUTE_CONFIGS } from './shared/constants/route.constants';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {
        path: '',
        redirectTo: ROUTE_CONFIGS.login.fullPath,
        pathMatch: 'full'
      },
      {
        path: ROUTE_CONFIGS.login.path,
        loadComponent: () => import('./core/login-page/login-page.component').then(m => m.LoginPageComponent)
      },
      {
        path: ROUTE_CONFIGS.register.path,
        loadComponent: () => import('./core/register-page/register-page.component').then(m => m.RegisterPageComponent)
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./core/layouts/site-layout/site-layout.component').then(m => m.SiteLayoutComponent),
    canActivate: [AuthGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
