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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var JobsService = (function () {
    function JobsService(_http) {
        this._http = _http;
        this._jobsUrl = 'https://blog.slamby.com/wp-json/wp/v2/posts?categories=265';
        this._jobUrl = 'https://blog.slamby.com/wp-json/wp/v2/posts/';
    }
    JobsService.prototype.getJobs = function () {
        return this._http.get(this._jobsUrl)
            .map(function (response) { return response.json(); })
            .do()
            .catch(this.handleError);
    };
    JobsService.prototype.getJob = function (id) {
        return this._http.get(this._jobUrl + id)
            .map(function (response) { return response.json(); })
            .do()
            .catch(this.handleError);
    };
    JobsService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    JobsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobsService);
    return JobsService;
}());
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map