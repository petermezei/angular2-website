import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { ProductRoutes }        from './products/product.routes';
import { HektorRoutes } from './hektor/hektor.routes';
import { NotFoundComponent } from './404/404.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: '404', component: NotFoundComponent },
  ...ProductRoutes,
  ...HektorRoutes,
  { path: '**', redirectTo: '/404' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];