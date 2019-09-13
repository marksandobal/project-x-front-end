import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { UsersComponent } from './dashboard/users/users.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import { ApiService } from './public/service/api.service';
// import { CustomerService } from './public/service/customer.service';
import { NeedAuthGuard } from './public/guards/NeedAuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }