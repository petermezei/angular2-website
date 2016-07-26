"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Our main component
var app_component_1 = require('./app.component');
// Our main routes
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map