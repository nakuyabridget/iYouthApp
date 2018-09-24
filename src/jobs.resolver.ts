import { JobDataServiceService } from './app/job-data-service.service';
import { Job } from './app/job';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class JobsResolver implements Resolve<Observable<Job[]>> {
    constructor(private jobDataService: JobDataServiceService) { }
    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Job[]> {
        return this.jobDataService.getAllJobs();
    }
}
