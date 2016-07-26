import { RouterConfig } from '@angular/router';

import { ApiComponent } from './api.component';
import { PricingComponent } from './pricing.component';

export const ApiRoutes: RouterConfig = [
  {
    path: 'api',
    component: ApiComponent
  },
  { path: 'pricing', component: PricingComponent }
];