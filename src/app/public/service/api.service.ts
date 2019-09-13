import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../responses/login.response';
import { ParseSourceSpan } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/vnd.project-x.v1+json');
    return this.http.post<LoginResponse>(`${this.base_url}/sessions`, { session: { password: password, email: email}}, { headers: headers });
  }

  // login(user, password){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }
}
