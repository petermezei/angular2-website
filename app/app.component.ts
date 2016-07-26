import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductService } from './products/product.service';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'pm-app',
    template: `
        <navbar></navbar>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS]
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
