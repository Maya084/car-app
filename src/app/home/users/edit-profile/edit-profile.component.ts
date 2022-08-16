import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { findIndex, includes, isNil, omit } from 'lodash';
import { ICarReport } from '../../../shared/interfaces';
import { ReportsService } from '../../../shared/services/reports.service';
import { UserService } from '../../../shared/services/user.service';
import { URLS } from '../../../shared/urls';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit {

  user = this.userService.user;
  startValues!: any;
  reports !: ICarReport[];

  downloadImgUrl = URLS.UPLOAD;

  editProfileForm = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.maxLength(32)]],
    username: ['', [Validators.minLength(3), Validators.maxLength(16)]],
    lastName: ['', [Validators.minLength(3), Validators.maxLength(32)]],
    email: ['', [Validators.email, Validators.minLength(6), Validators.maxLength(32)]],
    password: ['', [Validators.minLength(8)]]
  })

  constructor(
    private userService: UserService,
    private reportsService: ReportsService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.user.pipe(take(1)).subscribe(currUser => {
      this.editProfileForm.patchValue(currUser);
      this.startValues = currUser;
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

  getFControl(name: string): FormControl {
    return this.editProfileForm.get(name) as FormControl;
  }

  onEdit(): void {
    let formValues = this.editProfileForm.getRawValue();

    for (const key in formValues) {
      if (this.startValues[key] == formValues[key] || isNil(formValues[key]) || formValues[key] == '') {
        formValues = omit(formValues, key);
      }
    }

    const callback = (status: boolean) => {
      if (status) {
        this.editProfileForm.patchValue({ password: '' });
        this.editProfileForm.markAsPristine();
        return;
      }
      this.editProfileForm.patchValue(this.startValues);
    }

    this.userService.editUserInfo(formValues, callback);
  }

}
