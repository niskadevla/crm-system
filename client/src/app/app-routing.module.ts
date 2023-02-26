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
    children: [
      {
        path: ROUTE_CONFIGS.overview.path,
        loadComponent: () => import('./core/overview-page/overview-page.component').then(m => m.OverviewPageComponent)
      },
      {
        path: ROUTE_CONFIGS.analytics.path,
        loadComponent: () => import('./core/analytics-page/analytics-page.component').then(m => m.AnalyticsPageComponent)
      },
      {
        path: ROUTE_CONFIGS.history.path,
        loadComponent: () => import('./core/history-page/history-page.component').then(m => m.HistoryPageComponent)
      },
      {
        path: ROUTE_CONFIGS.order.path,
        loadComponent: () => import('./core/order-page/order-page.component').then(m => m.OrderPageComponent)
      },
      {
        path: ROUTE_CONFIGS.categories.path,
        loadComponent: () => import('./core/categories-page/categories-page.component').then(m => m.CategoriesPageComponent)
      },
      {
        path: `${ROUTE_CONFIGS.categories.path}/${ROUTE_CONFIGS.newItem.path}`,
        loadComponent: () => import('./core/categories-page/categories-form/categories-form.component').then(m => m.CategoriesFormComponent)
      },
      {
        path: `${ROUTE_CONFIGS.categories.path}/:id`,
        loadComponent: () => import('./core/categories-page/categories-form/categories-form.component').then(m => m.CategoriesFormComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
