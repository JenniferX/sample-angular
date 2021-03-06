import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const DashboardRoutes: Routes = [
    {path: '**', component: DashboardComponent }

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(DashboardRoutes)]
})

export class DashboardRoutingModule {}
