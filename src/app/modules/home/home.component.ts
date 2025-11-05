import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { AuthRequest } from 'src/app/models/interfaces/auth/AuthRequest';
import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignUpUserRequest';
import { UserService } from 'src/app/services/user/user.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private cookieService: CookieService,
    private messageService : MessageService,
    private router: Router

  ){}

  onSubmitLoginForm(): void {
    console.log(this.loginForm.value)
    if(this.loginForm.value && this.loginForm.valid){
        this.userService.authUser(this.loginForm.value as AuthRequest).subscribe({
        next: (response) => {
            if(response){
                this.cookieService.set('USER_INFO', response?.token)
                this.loginForm.reset();
                this.router.navigate(['/dashboard'])
                this.messageService.add({
                  severity: 'success',
                  summary:'Sucesso',
                  detail:`Bem vindo de volta ${response?.name}!`,
                  life: 2000
                })
            }
        },
        error: (err) => {
            this.messageService.add({
                  severity: 'error',
                  summary:'Erro',
                  detail:`Erro ao realizar login!`,
                  life: 2000
                })
          console.log(err)}
      })
    }
  }

  OnSubmitSignUpForm(): void {
    if(this.signUpForm.value && this.signUpForm.valid){
      this.userService.signUpUser(this.signUpForm.value as SignUpUserRequest).subscribe({
        next: (response) => {
          if(response){
              this.messageService.add({
                  severity: 'success',
                  summary:'Sucesso',
                  detail: 'Usuário criado com sucesso!',
                  life: 2000
                })
            this.signUpForm.reset();
            this.loginCard = true;
          }
        },
        error: (err) =>{
             this.messageService.add({
                  severity: 'error',
                  summary:'Erro',
                  detail:`Erro ao criar usuário!`,
                  life: 2000
                })
          console.log(err)
        }
      })
    }
  }

}
