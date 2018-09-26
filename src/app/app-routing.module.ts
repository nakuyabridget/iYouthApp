import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobComponent } from './job/job.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsResolver } from '../jobs.resolver';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/signup',
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
        path: 'auth/signup',
        component: SignupComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
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
