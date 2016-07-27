"use strict";
var company_component_1 = require('./company.component');
var contact_component_1 = require('./contact/contact.component');
var partners_component_1 = require('./partners/partners.component');
exports.CompanyRoutes = [
    { path: 'company', component: company_component_1.CompanyComponent },
    { path: 'company/contact', component: contact_component_1.ContactComponent },
    { path: 'company/partners', component: partners_component_1.PartnersComponent }
];
//# sourceMappingURL=company.routes.js.map