import { Component, OnInit }  from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'app/hektor/hektor.component.html',
    styleUrls: ['app/hektor/hektor.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HektorComponent implements OnInit {
    pageTitle: string = 'Demo Text';
    people = [1,2,3,4,5,6,7,8,9];
    hello : string = 'hello';
    
    constructor(private router: Router) {

    }

    ngOnInit(): void {
           //Nothing;
    }
}
