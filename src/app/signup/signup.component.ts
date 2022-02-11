import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpModel } from 'src/models/signUpModel.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  signUpModel = new SignUpModel();
  constructor( private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      companyName: ['', [Validators.required, Validators.email]],
      ownerName: ['', [Validators.required]],
      ownerNumber: ['', [Validators.required]],
      ownerEmailId: ['', [Validators.required, Validators.email]],
      areaName: [''],
      note: ['']
      
    });
  }
  backBtn(){
    
      this.router.navigate(["Login"]);
   
  }
  navigateToLoginup(){
    this.router.navigate(["Login"]);
  }
}
