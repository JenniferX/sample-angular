
import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatPaginator, MatTableDataSource, MatSort, PageEvent } from '@angular/material';
@Component({
  selector: 'app-enviroment-details',
  templateUrl: './enviroment-details.component.html',
  styleUrls: ['./enviroment-details.component.scss']
})
export class EnviromentDetailsComponent implements OnInit {
  serverStartedList: Array<any> = [];
  appStartedList: Array<any> = [];
  serverCredicalList: Array<any> = [];
  appCredicalList: Array<any> = [];
  public displayedColumns = ['name', 'status'] ;
  public columnsToDisplay = this.displayedColumns.slice();
  public dataSource;
  public serverName: string;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.data.envData.servers.forEach(server => {
      if ( server.status === 'STARTED') {
        this.serverStartedList.push(server);
      } else {
        this.serverCredicalList.push(server);
      }
      server.applications.forEach(app => {
        if (app.status === 'STARTED') {
          this.appStartedList.push(app);
        } else {
          this.appCredicalList.push(app);
        }
      });
    });
    this.displayAppInfo(this.data.envData.servers[0]);
  }

  displayAppInfo(server) {
    console.log(server.server);
    this.serverName = server.server;
    this.dataSource = new MatTableDataSource(server.applications);
  }


}


