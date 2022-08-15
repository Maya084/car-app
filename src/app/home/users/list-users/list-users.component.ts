import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { URLS } from '../../../shared/urls';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUsersComponent implements OnInit {

  allUsers = this.userService.users$;
  downloadImgUrl = URLS.UPLOAD;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAllUsers();
  }

}
