import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LOCAL_STORAGE } from "./consts";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isloggedIn = localStorage.getItem(LOCAL_STORAGE.IS_LOGGED_IN) === 'true';
        if (isloggedIn) {
            return true;
        }
        this.router.navigateByUrl('/auth/sign-in');
        return false;
    }

}