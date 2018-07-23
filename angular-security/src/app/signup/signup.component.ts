import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../commons/forms.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  signUp() {
    const val = this.signupForm.value;
    console.log(val);
    
    if(val.email && val.password && val.password === val.confirm) {
      this.authService.signUp(val.email, val.password).subscribe(() => {
        console.log("User was created"), console.error();
      });
    }

  }

  ngOnInit() {
  }

}
