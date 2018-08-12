import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../commons/forms.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  errors: string[] = [];

  errorCodesMessages = {
    min: 'Minimum length of the password is 10 characters',
    uppercase: 'Password must have at least one upper case character',
    digits: 'Password must have at least one digit character'
  };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      email: ['test@gmail.com', Validators.required],
      password: ['Password10', Validators.required],
      confirm: ['Password10', Validators.required]
    });
  }

  signUp() {
    const val = this.signupForm.value;
    console.log(val);
    
    if(val.email && val.password && val.password === val.confirm) {

      this.authService.signUp(val.email, val.password).subscribe(() => {
        this.router.navigateByUrl('/');
        console.log("User was created successfully")
      }, err => {
        this.errors = err.error.errors
      });
      
    }

  }

  ngOnInit() {
  }

}
