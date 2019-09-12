import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getUserPosts(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+ userId)
  }
}
