import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { CustomerService } from './public/service/customer.service';

@Injectable()
export class HttpInterceptorRequest implements HttpInterceptor {
  constructor(private customer: CustomerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');

    let is_logged = this.customer.isLogged();
    // Clone the request to add the new header.
    let header_login = req.headers.set('Content-Type', 'application/json')
    .set('Accept', 'application/vnd.project-x.v1+json')


    let header_request = req.headers.set('Content-Type', 'application/json')
    .set('Accept', 'application/vnd.project-x.v1+json')
    .set('Authorization', localStorage.getItem('TOKEN'))

    let header_result: HttpHeaders;

    if (is_logged){
       header_result = header_request
    }
    else
    {
       header_result = header_login
    }
    
    const authReq = req.clone({
      headers: header_result
    });

    console.log('Sending request with new header now ...');

    //send the newly created request
    return next.handle(authReq).catch((error, caught) => {
      //intercept the respons error and displace it to the console
      console.log('Error Occurred');
      console.log(error);
      //return the error to the method that called it
      return Observable.throw(error);
    }) as any;
  }
}