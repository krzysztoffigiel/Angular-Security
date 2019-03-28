import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../commons/forms.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showLogin: boolean = false;

  messagePerErrorCode = {
    loginFailed: 'Invalid credentials'
  }

  errors = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, public snackBar: MatSnackBar) { 
    this.loginForm = this.fb.group({
      email: ['test@gmail.com', Validators.required],
      password: ['Password10', Validators.required]
    });
  }

  generateMask() {
    const val = this.loginForm.value;
    if(val.email) {
      this.authService.generateMask(val.email).subscribe((response) => {
        console.log(response);
        this.showLogin = true;
      }, err => {
        console.error(`An error occured while mask generating: ${err}`);
      });
    }
  }

  login() {
    const val = this.loginForm.value;

    if(val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(() => {
        this.snackBar.open('User was successfully logged in', "Ok", {
          duration: 3000
        });
        console.log("User is logged in successfully");
        this.router.navigateByUrl('/');
      }, err => {
        this.snackBar.open('Incorrect user credentials', "Ok", {
          duration: 3000
        });
        console.error('An error occured while logging in', err);
      });
    }
  
  }

  ngOnInit() {
  }

}
