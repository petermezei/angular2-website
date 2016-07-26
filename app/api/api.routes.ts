import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { ApiComponent } from './api.component';
import { PricingComponent } from './pricing.component';

export const ApiRoutes: RouterConfig = [
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'api/pricing',
    component: PricingComponent
  }
];