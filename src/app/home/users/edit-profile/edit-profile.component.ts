import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { includes } from 'lodash';
import { ICarReport } from '../../../shared/interfaces';
import { ReportsService } from '../../../shared/services/reports.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit {

  user = this.userService.user;
  reports !: ICarReport[];

  constructor(
    private userService: UserService,
    private reportsService: ReportsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.reportsService.getReportsForUser(this.user.id).subscribe(
      (data: any) => {
        this.reports = data;
        this.cdr.markForCheck();
      }
    );
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

  deleteReport(): void{
    
  }

}
