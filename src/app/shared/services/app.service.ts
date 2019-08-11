import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './../components/snack-bar/snack-bar.component';
import { LoaderState } from './../components/loading-spinner/loading-spinner.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loaderSubject = new Subject<LoaderState>();
  loaderState  = this.loaderSubject.asObservable();
  constructor(
    private snackBar: MatSnackBar
  ) { }

  closeSnackBar() {
    this.snackBar.dismiss();
  }

  openSnackBar(message: string, type: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: {
        msg: message,
        option: type
      },
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [type, 'snack-bar']

    });

  }

  showSpinner() {
    this.loaderSubject.next({show: true});
  }

  closeSpinner() {
    this.loaderSubject.next({show: false});
  }
}
