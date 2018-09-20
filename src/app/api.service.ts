import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Inject the in-built http innto the constructor
  constructor(private http: Http) { }

  // API: GET /jobss
  public getAllJobs() {
    // will use this.http.get()
  }

  // API: POST /jobs
  public createJob(job: Job) {
    // will use this.http.post()
  }

  // API: GET /jobs/:id
  public getJobById(jobId: number) {
    // will use this.http.get()
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
