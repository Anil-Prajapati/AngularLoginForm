import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    const rolesString = localStorage.getItem('roles');
    if (rolesString !== null) {
      return JSON.parse(rolesString);
    } else {
      return [];
    }
  }

  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken',jwtToken);
  }

  public getToken(): string {
    const token = localStorage.getItem('jwtToken');
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
    this.getRoles() && this.getToken();
  }
}
