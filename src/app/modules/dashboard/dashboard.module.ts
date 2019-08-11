import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnviromentOverviewComponent} from './enviroment-overview/enviroment-overview.component';
import {StatusReportComponent} from './status-report/status-report.component';
import {DashboardComponent} from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing-module';

@NgModule({
  declarations: [
    EnviromentOverviewComponent,
    StatusReportComponent,
    DashboardComponent
  ],
  imports: [CommonModule,  SharedModule, DashboardRoutingModule],
  exports: []
})
export class DashboardModule {}
