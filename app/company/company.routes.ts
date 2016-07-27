import { RouterConfig } from '@angular/router';

import { CompanyComponent } from './company.component';
import { ContactComponent } from './contact/contact.component';
import { PartnersComponent } from './partners/partners.component';

export const CompanyRoutes: RouterConfig = [
  { path: 'company', component: CompanyComponent },
  { path: 'company/contact', component: ContactComponent },
  { path: 'company/partners', component: PartnersComponent }
];
