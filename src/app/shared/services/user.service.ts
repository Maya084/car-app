import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { LOCAL_STORAGE } from '../consts';
import { ISignIn, ISignUp, IUser } from '../interfaces';
import { URLS } from '../urls';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: IUser;
  isLoggedIn!: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertService
  ) {
    this.user = localStorage.getItem(LOCAL_STORAGE.USER_INFO) || {} as any;
    this.isLoggedIn = localStorage.getItem(LOCAL_STORAGE.IS_LOGGED_IN) === 'true';
  }

  signIn(signInData: ISignIn): void {
    this.http.post(URLS.SIGN_IN, signInData).subscribe({
      next: (userInfo: any) => {
        this.alert.openSnackBar({
          message: 'Successfully signed in!',
        });
        this.signInAndChangeRoute(userInfo);
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
    this.http.post(URLS.SIGN_UP, signUpData).subscribe(
      {
        next: () => {
          this.alert.openSnackBar({
            message: 'Successfull account creation!'
          });
          this.router.navigateByUrl('/auth/sign-in')
        },
        error: () => {
          this.alert.openSnackBar({
            message: 'An error occured!',
            status: 'error'
          });
        }
      }
    );
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

  checkLoggedIn(): void {
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/home/reports')
    }
  }

  signInAndChangeRoute(userInfo: any): void {
    this.user = userInfo;
    this.isLoggedIn = true;
    localStorage.setItem(LOCAL_STORAGE.IS_LOGGED_IN, 'true');
    localStorage.setItem(LOCAL_STORAGE.USER_INFO, userInfo);
    this.router.navigateByUrl('/home/reports');
  }

  signOutAndChangeRoute(): void {
    this.user = {} as any;
    this.isLoggedIn = false;
    localStorage.setItem(LOCAL_STORAGE.IS_LOGGED_IN, 'false');
    localStorage.setItem(LOCAL_STORAGE.USER_INFO, '');
    this.router.navigateByUrl('/auth/sign-in');
  }

}
