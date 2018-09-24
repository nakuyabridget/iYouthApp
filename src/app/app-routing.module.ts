import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobComponent } from './job/job.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsResolver } from '../jobs.resolver';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
    },
    {
        path: 'jobs',
        component: JobComponent,
        resolve: {
            jobs: JobsResolver
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [JobsResolver]
})

export class AppRoutingModule { }
