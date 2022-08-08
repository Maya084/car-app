import { Component, OnInit } from '@angular/core';
import { SidenavRoutes } from '../../shared/consts';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean = false;
  showDrawer = false;

  listRoutes = SidenavRoutes;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.userService.signOut();
  }

}
