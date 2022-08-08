import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationService } from '../../services/navigation.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @Input() title!: string;

  constructor(
    public navigationService: NavigationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    
  }

  onLogout(): void {
    this.userService.signOut();
  }

}
