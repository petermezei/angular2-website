import { Component, OnInit }  from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'app/hektor/hektor.component.html',
    styleUrls: ['app/hektor/hektor.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HektorComponent implements OnInit {
    pageTitle: string = 'Demo Text';
    
    constructor(private router: Router) {

    }

    ngOnInit(): void {
           //Nothing;
    }
}
