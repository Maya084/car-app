import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { ISignIn, ISignUp, IUser } from '../interfaces';
import { URLS } from '../urls';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isSignedIn = false;
  user!: IUser;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertService
  ) { }

  signIn(signInData: ISignIn): void {
    this.http.post(URLS.SIGN_IN, signInData).subscribe({
      next: (data: any) => {
        this.user = data;
        this.alert.openSnackBar({
          message: 'Successfully signed in!',
        });
        this.signInAndChangeRoute();
      },
      error: () => {
        this.alert.openSnackBar({
          message: 'Error while signing in!',
          status: 'error'
        });
      }
    })
  }

  signUp(signUpData: ISignUp) {
    return this.http.post(URLS.SIGN_UP, signUpData);
  }

  signInAndChangeRoute(): void {
    this.isSignedIn = true;
    this.router.navigateByUrl('/reports');
  }

  signOutAndChangeRoute(): void {
    this.isSignedIn = false;
    this.user = {} as any;
    this.router.navigateByUrl('/sign-in');
  }

  signOut() {
    this.http.post(URLS.SIGN_OUT, {}).subscribe(
      {
        next: () => {
          this.signOutAndChangeRoute();
        },
        error: () => {
          this.signOutAndChangeRoute();
        },
      })
  }

  async checkSignedIn() {
    this.http.get(URLS.WHO_AM_I).subscribe(
      {
        next: (data: any) => {
          this.user = data;
          this.helperSignedIn();
        },
        error: () => { },
      })

  }

  helperSignedIn(): void {
    this.isSignedIn = !isEmpty(this.user);

    if (this.isSignedIn) {
      this.router.navigateByUrl('/reports');
      return;
    }

    this.router.navigateByUrl('/sign-in');
  }

}
