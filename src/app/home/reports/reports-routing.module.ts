import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEstimationComponent } from './get-estimation/get-estimation.component';
import { ReportsComponent } from './list-reports/reports.component';
import { NewReportComponent } from './new-report/new-report.component';

const routes: Routes = [
  {
    path: 'create',
    component: NewReportComponent
  },
  {
    path: 'lookup',
    component: GetEstimationComponent
  },
  {
    path: '',
    component: ReportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
