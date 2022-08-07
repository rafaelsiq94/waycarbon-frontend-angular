import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carbon } from './carbon';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) {
  }

  addCarbon(carbon:Carbon): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(carbon);
    return this.http.post(this.baseURL + 'api/carbon/add', body,{'headers':headers})
  }

}
