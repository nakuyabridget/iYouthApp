import { JobDataServiceService } from './job-data-service.service';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JobDataServiceService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
