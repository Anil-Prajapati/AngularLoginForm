import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(role: []){
    localStorage.setItem('roles', JSON.stringify(role));
  }

  // public getRoles(): [] {
  //   const rolesString = localStorage.getItem('role');
  //   if (rolesString !== null) {
  //     return JSON.parse(rolesString);
  //   } else {
  //     return [];
  //   }
  // }

  public getRole(){
    let userStr = localStorage.getItem("roles");
    if(userStr != null)
    {
      return JSON.parse(userStr);
    }else{
    
      return null;
    }
  }

  public setToken(token:string){
    localStorage.setItem('token',token);
  }

  public getToken(): string {
    const token = localStorage.getItem('token');
    if (token !== null) {
      return token;
    } else {
      return '';
    }
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    this.getRole() && this.getToken();
  }
}
