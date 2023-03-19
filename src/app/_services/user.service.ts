import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,private userAuthService:UserAuthService) { }

  PATH_OF_API="http://localhost:8080";

  requestHeader=new HttpHeaders(
    { "No-Auth":"True" }
  );

  public login(loginData:any){
        return this.httpClient.post(this.PATH_OF_API + "/login",loginData,{ headers: this.requestHeader });
  }


  public roleMatch(allowedRoles: string[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRole();
  
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles === allowedRoles[j]) {
            isMatch = true;
            break;
          }
        }
      }
    }
    return isMatch;
  }
  
}
