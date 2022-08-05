import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LOCAL_STORAGE } from "./consts";
import { UserService } from "./services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loggedIn = localStorage.getItem(LOCAL_STORAGE.IS_LOGGED_IN);
        return loggedIn === 'true';
    }

}