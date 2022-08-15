import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { ICar, ICarReport } from '../interfaces';
import { URLS } from '../urls';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  getReportsForUser(id: number) {
    return this.http.get(`${URLS.REPORTS_USER}/${id}`).pipe(take(1));
  }

  private reportsSubc = new BehaviorSubject<any[]>([{}])
  reports$ = this.reportsSubc.asObservable();

  constructor(
    private http: HttpClient,
    private alert: AlertService,
    private router: Router
  ) {
    this.getAllReports();
  }

  createNewReport(newReport: ICar) {
    this.http.post(URLS.REPORTS, newReport).pipe(take(1)).subscribe(
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

  getAllReports(): void {
    this.http.get(URLS.REPORTS).pipe(take(1)).subscribe({
      next: (reports: any) => {
        this.reportsSubc.next(reports);
      },
      error: () => {
        this.alert.openSnackBar({
          message: 'An error occured while getting reports!',
          status: 'error'
        });
      },
    })
  }

  getEstimation(formValues: any, cb: (status: boolean, estPrice: number) => void) {
    this.http.get(URLS.GET_ESTIMATE, { params: formValues }).pipe(take(1)).subscribe({
      next: (data: any) => { cb(true, data?.price); },
      error: (_: any) => {
        cb(false, 0);
      },
    })
  }

  deleteReport(reportId: number, cb: (deleted: boolean) => void) {
    const callback = () => {
      this.http.delete(`${URLS.REPORTS}/${reportId}`).subscribe({
        next: () => {
          this.alert.openSnackBar({
            message: "The report was successfully deleted.",
            status: 'success',
          });
          cb(true)
        },
        error: () => {
          this.alert.openSnackBar({
            message: "An error occurred while deleting the report! Please try again.",
            status: 'error',
          });
          cb(false)
        },
      })
    }
    this.alert.openConfirmationDialog({
      message: 'Are you sure you want to remove this report?',
      title: 'Delete report',
      callback
    });


  }
}
