import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../responses/login.response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
                    .set('Accept', 'application/vnd.project-x.v1+json');

    let params = new HttpParams();
    params.append('password', password);
    params.append('email', email);

    return this.http.post<LoginResponse>('http://localhost:3000/sessions', { headers: headers, params: params });
  }

  // login(user, password){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }
}
