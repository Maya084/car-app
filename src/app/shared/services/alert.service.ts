import { Direction } from '@angular/cdk/bidi/directionality';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
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

}
