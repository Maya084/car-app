import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { findIndex, includes } from 'lodash';
import { ICarReport } from '../../../shared/interfaces';
import { ReportsService } from '../../../shared/services/reports.service';
import { UserService } from '../../../shared/services/user.service';
import { URLS } from '../../../shared/urls';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit {

  user = this.userService.user;
  reports !: ICarReport[];

  downloadImgUrl = URLS.UPLOAD;

  constructor(
    private userService: UserService,
    private reportsService: ReportsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.user.subscribe(currUser => {
      this.reportsService.getReportsForUser(currUser.id).subscribe(
        (data: any) => {
          this.reports = data;
          this.cdr.markForCheck();
        }
      );
    })

  }

  uploadFile(target: any): void {
    try {
      const file = target.files[0] as File;
      const isValidType = includes(file.name, '.png') || includes(file.name, '.jpg');

      if (!isValidType) {
        throw new Error();
      }

      this.userService.uploadImage(file);

    } catch (e) {
    }

    // Upload with the same name
    target!.value = null;
  }

  deleteReport(reportId?: number): void {
    if (!reportId) {
      return;
    }

    const callback = (deleted: boolean) => {
      if (!deleted) { return }
      const indx = findIndex(this.reports, el => el.id == reportId);
      this.reports.splice(indx, 1);
      this.cdr.markForCheck();
    }

    this.reportsService.deleteReport(reportId, callback);
  }

}
