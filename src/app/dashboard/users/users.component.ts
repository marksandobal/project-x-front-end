import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Object;
  constructor(private data: UserService, private api: ApiService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  saveUser(user){
    this.api.createUser(user).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getUsers(){
    this.api.getUsers().subscribe(
      response => {
        this.users = response.users;
      }
    );
  }
}
