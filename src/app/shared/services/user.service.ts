import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignIn, ISignUp } from '../interfaces';
import { URLS } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  signUp(signUpData: ISignUp) {
    return this.http.post(URLS.SIGN_UP, signUpData);
  }

  isSignedIn = false;

  constructor(
    private http: HttpClient
  ) { }

  signIn(signInData: ISignIn): Observable<any> {
    return this.http.post(URLS.SIGN_IN, signInData)
  }

}
