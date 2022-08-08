import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavRoutes } from '../../consts';
import { NavigationService } from '../../services/navigation.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  listRoutes = SidenavRoutes;
  opened = false;
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  @Input() title!: string;

  constructor(
    public navigationService: NavigationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.navigationService.toggleDrawer$.subscribe(
      (_: any) => { this.drawer.toggle(); }
    )
  }

  onLogout(): void {
    this.userService.signOut();
  }

}
