import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../public/responses/login.response';
import { ParseSourceSpan } from '@angular/compiler';
import { User } from '../dashboard/models/user.model';
import { UserResponse } from '../dashboard/responses/user.response';
import { UsersResponse } from '../dashboard/responses/users.response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.base_url}/sessions`, { session: { password: password, email: email}});
  }

  logout(){
    return this.http.delete<any>(`${this.base_url}/sessions`);
  }

  getCurrentUser(){
    return this.http.get<UserResponse>(`${this.base_url}/current_user`);
  }

  getUsers(){
    return this.http.get<UsersResponse>(`${this.base_url}/users`);
  }

  getUser(id){
    return this.http.get<UserResponse>(`${this.base_url}/users/${id}`);
  }

  createUser(user: User): Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.base_url}/users`, user);
  }

  updateUser(id, user): Observable<UserResponse>{
    return this.http.put<UserResponse>(`${this.base_url}/users/${id}`, user);
  }

  // login(email: string, password: string): Observable<LoginResponse>{
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   headers = headers.set('Accept', 'application/vnd.project-x.v1+json');
  //   return this.http.post<LoginResponse>(`${this.base_url}/sessions`, { session: { password: password, email: email}}, { headers: headers });
  // }

  // login(user, password){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }
}
