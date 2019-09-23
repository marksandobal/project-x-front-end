import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  logOut(){
    this.api.logout().subscribe(response =>{
      localStorage.removeItem('TOKEN');
      this.router.navigate(['/login']);
    });
  }

  isLogged() {
    return localStorage.getItem('TOKEN') != null;
  }

  rediredToLogin(){
    this.router.navigate(['/login']);
  }

  getCurrentUser(){
    this.api.getCurrentUser().subscribe(response => {
     this.user = new User(response.user);
    });
  }

}
