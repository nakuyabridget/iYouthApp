import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'jobs',
        component: JobComponent
    }
];
