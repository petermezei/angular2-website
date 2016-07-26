"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
var product_routes_1 = require('./products/product.routes');
var hektor_routes_1 = require('./hektor/hektor.routes');
var _404_component_1 = require('./404/404.component');
exports.routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '404', component: _404_component_1.NotFoundComponent }
].concat(product_routes_1.ProductRoutes, hektor_routes_1.HektorRoutes, [
    { path: '**', redirectTo: '/404' }
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map