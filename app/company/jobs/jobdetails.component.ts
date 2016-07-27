import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { JobsService } from './jobs.service';
import { IJob } from './job';

@Component({
    templateUrl: '/app/company/jobs/jobdetails.component.html',
    styleUrls: ['app/company/jobs/jobdetails.component.css']
})

export class JobDetailsComponent implements OnInit, OnDestroy {
    job: IJob = {id:"", title:{rendered:""}, date:"", content:{rendered:""}};

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _jobsService: JobsService){
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getJob(id)
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getJob(id: number) {
        this._jobsService.getJob(id)
                .subscribe(
                    job => this.job = job,
                    error => this.errorMessage = <any>error);
    }
}