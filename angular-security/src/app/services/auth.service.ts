
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, shareReplay, tap } from "rxjs/operators";


export const ANONYMOUS_USER: User = {
  id: undefined,
  email: ''
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn))

  constructor(private http: HttpClient) { 
    http.get<User>('/api/user')
    .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));
  }

  signUp(email: string, password: string) {
    return this.http.post<User>('/api/signup', { email, password })
      .pipe(shareReplay(), tap(user => this.subject.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<User>('/api/login', { email, password })
      .pipe(shareReplay(), tap(user => this.subject.next(user)));
  }

  logout(): Observable<any> {
    return this.http.post('/api/logout', null)
      .pipe(shareReplay(), tap(user => this.subject.next(ANONYMOUS_USER)));
  }

}
