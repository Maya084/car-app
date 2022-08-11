import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

  userID!: number;
  userData = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    this.userID = Number(this.activatedRoute.snapshot.paramMap.get('userID'));
    this.getUser();
  }

  ngOnInit() {
  }

  getUser() {
    if (!this.userID) {
      return;
    }

    this.userService.getUser(this.userID).subscribe(data => {
      this.userData = data;
      this.cdr.markForCheck();
    });
  }

}
