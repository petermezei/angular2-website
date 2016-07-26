"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
var product_routes_1 = require('./products/product.routes');
var hektor_routes_1 = require('./hektor/hektor.routes');
exports.routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent }
].concat(product_routes_1.ProductRoutes, hektor_routes_1.HektorRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map