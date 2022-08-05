import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  template: `
      <router-outlet></router-outlet>
  `,
})
export class AuthComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.userService.signOut();
  }

}
