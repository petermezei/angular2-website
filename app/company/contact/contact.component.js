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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
let ContactComponent = class ContactComponent {
    constructor() {
        this.pageTitle = 'Welcome';
    }
};
ContactComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/company/contact/contact.component.html',
        styleUrls: ['app/company/contact/contact.component.css'],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map