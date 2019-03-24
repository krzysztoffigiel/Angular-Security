
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap, filter } from "rxjs/operators";


export const ANONYMOUS_USER: User = {
  id: undefined,
  email: ''
}

@Injectable()

export class AuthService {

  private subject = new BehaviorSubject<User>(undefined);

  user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private http: HttpClient) {
    console.log('Hello Auth Service')
    http.get<User>('api/user')
      .pipe(tap(console.log))
      .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER), err => {
        console.error(`Cannot resolve path /api/user: ${err}`);
      })
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
