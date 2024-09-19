import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class MiServicioService {

  constructor() { }
}
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';
    return this.http.get<any>(url);
  }
}
