import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Object;
  posts: Object;
  userId: String;

  constructor(private data: UserService, private route: ActivatedRoute, private api: ApiService) { 
    this.route.params.subscribe(params => {
      this.userId = params.id
    })
  }

  ngOnInit() {
    if(this.userId != "new")
    {
      this.getUserDetail();
    }
  }

  getUserDetail(){
    this.api.getUser(this.userId).subscribe(
      data => {
        this.user = data.user;
        console.log(data);
      }
    );
  }

  createOrUpdate(){
    console.log(this.user);
    // if(this.userId == "new"){
    //   this.createUser();
    // }else{
    //   this.updateUser();
    // }
  }

  createUser(){
    let user = new User(this.user);
    this.api.createUser(user).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  updateUser(){
    let user = new User(this.user);
    this.api.updateUser(this.userId, user).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
