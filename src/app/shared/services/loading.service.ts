import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from '../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private matDialog: MatDialog
  ) { }

  startLoading(): void {
    this.matDialog.open(LoaderComponent, {
      width: '100%',
      height: '100%',
      disableClose: true,
      panelClass: 'loading-container'
    })
  }

  stopLoading(): void {
    this.matDialog?.closeAll();
  }

}
