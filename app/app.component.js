"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var product_service_1 = require('./products/product.service');
var jobs_service_1 = require('./company/jobs/jobs.service');
var navbar_component_1 = require('./shared/navbar/navbar.component');
var footer_component_1 = require('./shared/footer/footer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Management';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "\n        <navbar></navbar>\n        <router-outlet></router-outlet>\n        <footer></footer>\n     ",
            directives: [navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
            providers: [jobs_service_1.JobsService,
                product_service_1.ProductService,
                http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map