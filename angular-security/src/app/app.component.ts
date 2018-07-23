import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Observable } from '../../node_modules/rxjs';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isLoggedOut$ = this.authService.isLoggedOut$;

  }

}
