import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HandlersService } from './handlers/handlers.service';
import { catchError, map } from 'rxjs/operators';
import { ConfigParams } from './config-params/config-params.service';
import { ConfigsService } from './configs/configs.service';
import { AppService } from './../shared/services/app.service';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private handler: HandlersService,
    private webConfig: ConfigsService,
    private appService: AppService
  ) { }

  getServiceRequest(option: string) {
    this.appService.showSpinner();
    return this.webConfig.getData(ConfigParams[option]).pipe(
      map((res: Response) => {
        const data = res;
        return this.handler.handleSuccess( res, ConfigParams[option].successMsg);
      }),
      catchError((error: any) => {
        return this.handler.handleError(error);
      })
    );
  }
}
