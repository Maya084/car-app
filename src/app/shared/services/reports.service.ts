import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from '../interfaces';
import { URLS } from '../urls';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient,
    private alert: AlertService,
    private router: Router
  ) { }

  createNewReport(newReport: ICar) {
    this.http.post(URLS.REPORTS, newReport).subscribe(
      {
        next: () => {
          this.alert.openSnackBar({ message: 'Report successfully added!' });
          this.router.navigateByUrl('/home/reports');
        },
        error: () => {
          this.alert.openSnackBar({
            message: 'An error occured!',
            status: 'error'
          });
        },
      }
    )
  }
}
