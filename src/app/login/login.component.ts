import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public api: ApiService,public router:Router){}
  loginForm:any;
  formSubmitted=false;
  message:any;
  tokenres:any;
  isLoading = false;

  ngOnInit(){
    this.loginForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
    this.onClick();
  }
 login(){
  this.formSubmitted = true;
  if(this.loginForm.valid){
    this.isLoading = true;
    this.api.adminLogin(this.loginForm.value).subscribe((res:any)=>{
      this.tokenres = res.token;
      console.log(this.tokenres,"token")
      sessionStorage.setItem('token',this.tokenres);
      this.router.navigate(['../view-all'])

    },error =>{
     if(error.error.Message == "username or password incorrect"){
         this.message = true;
         this.isLoading = false;
     }
    })
  }
  // this.api.adminLogin(this.loginForm.value).subscribe((res:any)=>{
  //   this.router.navigate(['../view-all'])
  // })
  }
  show = true
  password:any
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
      console.log(this.show,"this.showT")
    } else {
      this.password = 'password';
      this.show = true;
      console.log(this.show,"this.showF")
    }
  }
}
