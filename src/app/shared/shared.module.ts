import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import {
   MatButtonModule,
   MatCardModule,
   MatChipsModule,
   MatDialogModule,
   MatExpansionModule,
   MatProgressSpinnerModule,
   MatSnackBarModule,
   MatToolbarModule,
   MatListModule,
   MatTableModule,
  } from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { EnviromentDetailsComponent} from './../modules/dashboard/enviroment-details/enviroment-details.component';
@NgModule({
  declarations: [LoadingSpinnerComponent, SnackBarComponent, PieChartComponent, EnviromentDetailsComponent],
  imports: [
     RouterModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    HighchartsChartModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    CommonModule
  ],
  exports: [
    PieChartComponent,
    LoadingSpinnerComponent,
    HighchartsChartModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatListModule,
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule
  ],
  entryComponents: [SnackBarComponent, EnviromentDetailsComponent]
})
export class SharedModule { }
