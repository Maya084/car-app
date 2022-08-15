import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICarReport, IUser } from '../../../shared/interfaces';
import { ReportsService } from '../../../shared/services/reports.service';
import { UserService } from '../../../shared/services/user.service';
import { URLS } from '../../../shared/urls';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

  userID!: number;
  userData: IUser = {} as any;
  reports!: ICarReport[];
  downloadImgUrl = URLS.UPLOAD;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private reportsService: ReportsService
  ) {
    this.userID = Number(this.activatedRoute.snapshot.paramMap.get('userID'));
    this.getUser();
    this.getReports();
  }

  ngOnInit() {
  }

  getUser(): void {
    if (!this.userID) {
      return;
    }

    this.userService.getUser(this.userID).subscribe(data => {
      this.userData = data;
      this.cdr.markForCheck();
    });
  }

  getReports(): void {
    this.reportsService.getReportsForUser(this.userID).subscribe(
      {
        next: (data: any) => {
          this.reports = data;
          this.cdr.markForCheck();
        },
        error: () => {

        }
      }
    );
  }

}
