import { Component, OnInit } from '@angular/core';
import { ApiService} from '../service/api.service';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'arturo@mail.com';
  password = '123123';
  constructor(private api: ApiService, private router: Router, private customer: CustomerService) { }

  ngOnInit() {
    this.tryLogin();
  }

  tryLogin(){
    this.api.login(this.email, this.password).subscribe(result => {
      if(result.session.token){
        this.customer.setToken(result.session.token);
        this.router.navigateByUrl('/dashboard')
      }
    });
  }

}
