import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../commons/forms.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  messagePerErrorCode = {
    loginFailed: 'Invalid credentials'
  }

  errors = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.fb.group({
      email: ['test@gmail.com', Validators.required],
      password: ['Password10', Validators.required]
    });
  }

  login() {
    const val = this.loginForm.value;

    if(val.email && val.password) {
      // this.authService.login(val.email, val.password).subscribe(() => {
      //   console.log("User is logged in successfully");
      //   this.router.navigateByUrl('/');
      // }, err => {
        
      // });
    }
  
  }

  ngOnInit() {
  }

}
