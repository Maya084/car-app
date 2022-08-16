import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { imgPathConst, SidenavRoutes } from '../../consts';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  imgPath = imgPathConst;
  listRoutes = SidenavRoutes;

  @Input() title!: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.navigationService.toggleDrawer$.subscribe(
    //   (_: any) => { this.drawer.toggle(); }
    // )
  }

  onLogout(): void {
    this.userService.signOut();
  }

  onChangeColors(): void {
    const darkColors = ['#6709A0', '#051B69', '#4B1A9A', '#26494D', '#2E6B6B', '#33805B', '#7b1fa2'];
    const lightColors = ['#A4C76D', '#81B95F', '#60A954', '#FFC4BD', '#EC7FB3', '#AC45BD', '#FFCDC7', '#a349c9'];
    const rando = (colors: string[]) => colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText = `
    --dark-color: ${rando(darkColors)};
    --light-color: ${rando(lightColors)};
    `
  }

}
