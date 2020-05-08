import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import {BasicAuthenticationService} from './../basic-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    let basicAuthHeaders  = this.basicAuthenticationService.getToken();
    let user = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaders && user){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaders
        }
      })
  }
    return next.handle(request);
  }
}
