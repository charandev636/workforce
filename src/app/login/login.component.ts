import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/models/loginModel.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  loginForm: FormGroup;
  loginModel = new LoginModel();
  buttonDisabled = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  get f() { return this.loginForm.controls; }
  ngOnInit() {

       this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: ['']
    });
  }




  formSubmit(){

  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  navigateToRegister(){}

}
