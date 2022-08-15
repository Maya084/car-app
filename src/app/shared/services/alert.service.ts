import { Direction } from '@angular/cdk/bidi/directionality';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../components/dialog/dialog.component';
import { take } from 'rxjs';

interface ISnackBarConfig {
  message: string;
  status?: 'success' | 'error';
  action?: string;
  direction?: Direction;
  duration?: number;
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  openSnackBar(snackbarConfig: ISnackBarConfig) {
    this.snackBar.open(
      snackbarConfig.message,
      snackbarConfig?.action,
      {
        panelClass: `snackbar-${snackbarConfig.status || 'success'}`,
        direction: snackbarConfig?.direction || 'ltr',
        duration: snackbarConfig?.duration || 3000,
        horizontalPosition: snackbarConfig?.horizontalPosition || 'center',
        verticalPosition: snackbarConfig?.verticalPosition || 'top'
      }
    )
  }

  openConfirmationDialog(config: any): void {
    const dialogRef = this.matDialog.open(ConfirmationDialogComponent,
      {
        data: {
          message: 'Are you sure you want to delete this report?',
          title: 'Remove report'
        },
        width: '350px',
        panelClass: 'confirmation-dialog'
      });

    dialogRef.afterClosed().pipe(take(1)).subscribe(data => {
      if (data == 'yes' && config.callback) {
        config.callback();
      }
      else {
        if (config?.callbackClose) {
          config?.callbackClose();
        }
      }
    })
  }

}
