import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppService } from './../../shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class HandlersService {

  constructor(
    private appService: AppService
  ) { }
    handleSuccess(res, msg) {
      this.appService.closeSpinner();
      this.appService.closeSnackBar();
      if ( msg && msg !== '') {
        this.appService.openSnackBar(msg, 'snack-success');
      }
      return res;
    }

    handleError(error) {
      this.appService.closeSnackBar();
      this.appService.closeSpinner();
      this.appService.openSnackBar(`The request cannot be submitted`, 'snack-error' );
      return Observable.throw(error);
    }
}
