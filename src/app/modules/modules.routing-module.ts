import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [
    {
        path: '**',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(moduleRoutes)],
    exports: [RouterModule]
})

export class ModuleRouting{}
