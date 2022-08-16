import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar class="toolbar-menu">
      <span class="title-page">{{title}}</span>
    </mat-toolbar>
  `,
  styles: [`
  .toolbar-menu {
      display: flex;
      justify-content: space-between;
    }

  .title-page {
      margin-left: 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @Input() title!: string;

  constructor(
    public navigationService: NavigationService,
  ) { }

  ngOnInit() {

  }

}
