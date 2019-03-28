
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routesConfig } from './routes.config';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from './services/books.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';

import { map, switchMap, shareReplay } from 'rxjs/operators';

import { AuthService } from './services/auth.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    SignupComponent,
    SafePipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    MatSnackBarModule,
    MatKeyboardModule,
    FormsModule
  ],
  providers: [BooksService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
