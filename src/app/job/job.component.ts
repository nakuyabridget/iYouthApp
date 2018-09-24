import { JobDataServiceService } from './../job-data-service.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {


  constructor(
    private jobDataService: JobDataServiceService,
    private route: ActivatedRoute) { }

  // Define a public property job and initial it to an empty list
  jobs: Job[] = [];

  public ngOnInit() {
    this.route.data
      .pipe(map((data) => data['jobs']))
      .subscribe(
        (jobs) => {
          this.jobs = jobs;
        }
      );
    // this.jobDataService
    //   .getAllJobs()
    //   .subscribe(
    //     jobs => this.jobs = jobs
    //   );
  }

  // Method to create a job triggered by an event
  onAddJob(job: Job) {
    this.jobDataService
      .addJob(job)
      .subscribe(
        (newJob) => {
          this.jobs = this.jobs.concat(newJob);
        }
      );
  }

  // Method to remove a job triggered by an event
  onRemoveJob(job: Job) {
    this.jobDataService
      .deleteJobById(job.id)
      .subscribe(
        (_) => {
          this.jobs = this.jobs.filter(
            j => j.id !== job.id
          );
        }
      );
  }

  // Method to change job availability triggered by an event
  onToggleJobAvailability(job: Job) {
    this.jobDataService
      .toggleJobAvailability(job)
      .subscribe(
        updatedJob => job = updatedJob
      );
  }
}
