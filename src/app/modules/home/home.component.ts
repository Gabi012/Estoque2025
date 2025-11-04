import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginCard= true;
  loginForm = this.formBuilder.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  signUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder){}

  onSubmitLoginForm(): void {
    console.log('dados login', this.loginForm.value)
  }

  OnSubmitSignUpForm(): void {
    console.log('dados sign', this.signUpForm.value)
  }

}
