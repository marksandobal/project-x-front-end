import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Object;
  posts: Object;
  userId: number;

  constructor(private data: UserService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.userId = params.id
    })
  }

  ngOnInit() {
    this.getUserDetail();
    this.getPost();
  }

  getUserDetail(){
    this.data.getUser(this.userId).subscribe(
      data =>{
        this.user = data
      }
    );
  }

  getPost(){
    this.data.getUserPosts(this.userId).subscribe(
      data => {
        this.posts = data;
      console.log(data);
    })
  }

}
