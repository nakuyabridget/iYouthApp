import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Job } from './job';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Inject the in-built http innto the constructor
  constructor(private http: Http) { }

  // Custom error handler
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  // API: GET /jobss
  public getAllJobs(): Observable<Job[]> {
    // will use this.http.get()
    return this.http
      .get(API_URL + '/jobs')
      .pipe(map(response => {
        const jobs = response.json();
        return jobs.map((job) => new Job(job));
      }), catchError(this.handleError)
      );
  }

  // API: POST /jobs
  public createJob(job: Job): Observable<Job> {
    // will use this.http.post()
    return this.http
      .post(API_URL + 'jobs', job)
      .pipe(map(response => {
        return new Job(response.json());
      }), catchError(this.handleError)
      );
  }

  // API: GET /jobs/:id
  public getJobById(jobId: number): Observable<Job> {
    // will use this.http.get()
    return this.http
      .get(API_URL + '/jobs/' + jobId)
      .pipe(map(response => {
        return new Job(response.json());
      }), catchError(this.handleError)
      );
  }

  // API: PUT /jobs/:id
  public updateJob(job: Job) {
    // will use this.http.put()
  }

  // DELETE /jobs/:id
  public deleteJobById(jobId: number) {
    // will use this.http.delete()
  }

}
