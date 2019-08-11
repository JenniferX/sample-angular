import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog} from '@angular/material';
import { EnviromentDetailsComponent } from './../enviroment-details/enviroment-details.component';
@Component({
  selector: 'app-envs-overview',
  templateUrl: './enviroment-overview.component.html',
  styleUrls: ['./enviroment-overview.component.scss']
})
export class EnviromentOverviewComponent implements OnInit {
  @Input() envs;
  constructor(private dialog: MatDialog) { }
 
  ngOnInit() {
  }
  openDialog(envData): void {
    const dialogRef = this.dialog.open(EnviromentDetailsComponent, {
      height: 'auto',
      width: '1800px',
      data: { envData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
