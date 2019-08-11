import {Component, OnInit} from '@angular/core';
import {HttpClientService} from './../../http-client-service/http-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']})
export class DashboardComponent implements OnInit {
  envs;
  credicalList;
  startedList;
  appStartedList;
  appCredicalList;
  serverStartedList;
  serverCredicalList;
  constructor(private httpClient: HttpClientService) {}

  ngOnInit() {
    this.envs = [];
    this.credicalList = [];
    this.startedList = [];
    this.appStartedList = [];
    this.appCredicalList = [];
    this.serverStartedList = [];
    this.serverCredicalList = [];
    this
      .httpClient
      .getServiceRequest('getEnv')
      .subscribe(envir => {
        envir.map((server: any, index) => {
          return this.getEnvDetailsData(server, index, envir.length);
        });
      });
  }

  getEnvDetailsData(item, index, length) {
    return this
      .httpClient
      .getServiceRequest(`getEnv${item.name}`)
      .subscribe(envDetail => {
        this
          .envs
          .push({servers: envDetail, name: item.name, status: 'STARTED'});
        if (index === length - 1) {
          this.calculateStatus(this.envs);
        }
        console.log(this.envs);
      });
  }

  calculateStatus(envList) {
    envList.forEach((env, index) => {
      env
        .servers
        .forEach(server => {
          if (server.status.toUpperCase() === 'STARTED') {
            this
              .serverStartedList
              .push(server);
          }
          if (server.status.toUpperCase() === 'DOWN') {
            this.envs[index].status = 'DOWN';
            this
              .serverCredicalList
              .push(server);

          }
          if (server.applications) {
            server
              .applications
              .forEach(app => {
                if (app.status.toUpperCase() === 'STARTED') {
                  this.appStartedList.push(app);
                }
                if (app.status.toUpperCase() === 'FAILED') {
                  this.envs[index].status = 'DOWN';
                  this.appCredicalList.push(app);

                }
              });
          }
        });
    });
  }

}
