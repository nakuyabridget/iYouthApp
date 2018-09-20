import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Inject the in-built http innto the constructor
  constructor(private http: Http) { }
}
