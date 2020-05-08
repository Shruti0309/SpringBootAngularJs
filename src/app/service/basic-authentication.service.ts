import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  executeJWTAuthentication(username,password){

    return this.http.post<any>(
      `http://localhost:8080/authenticate`,
       {username,
       password}).pipe(
         map(
           data =>{
             sessionStorage.setItem('authenticatedUser',username);
             sessionStorage.setItem('token',`Bearer ${data.token}`);
             return data;
           }
         )
       );
  }

    getAuthenticatedUser(){
      return sessionStorage.getItem('authenticatedUser')
    }

    getToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem('token')
    }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
    }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }



}
