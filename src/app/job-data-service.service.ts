import { Job } from './job';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDataServiceService {

  constructor(private api: ApiService) { }

  // Simulate POST /jobs
  addJob(job: Job): Observable<Job> {
    return this.api.createJob(job);
  }

  // Simulate GET /jobs
  getAllJobs(): Observable<Job[]> {
    return this.api.getAllJobs();
  }

  // Simulate Get /jobs/:id
  getJobById(jobId: number): Observable<Job> {
    return this.api.getJobById(jobId);
  }


  // Toggle availability
  toggleJobAvailability(job: Job) {
    job.availability = !job.availability;
    return this.api.updateJob(job);
  }

  // Simulate delete a job
  deleteJobById(jobId: number): Observable<Job> {
    return this.api.deleteJobById(jobId)
  }

}
