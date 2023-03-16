import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private userService:UserService,
  private userAuthService:UserAuthService,
  private router:Router){}

  ngOnInit(): void {
    
  }

  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
localStorage.setItem('user', JSON.stringify(response));
        console.log(response)
      this.userAuthService.setRoles(response.user.role)
      
      if(response.user.role==='Admin'){

        this.router.navigate(['/admin']);

      }else if(response.user.role==='Product') {

        this.router.navigate(['/product']);

      }else if(response.user.role==='Order') {

        this.router.navigate(['/order']);

      }else if(response.user.role==='User') {

        this.router.navigate(['/user']);

      }else{
        this.router.navigate(['/forbidden'])
      }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
