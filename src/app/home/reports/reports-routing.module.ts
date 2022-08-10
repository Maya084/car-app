import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEstimationComponent } from './get-estimation/get-estimation.component';
import { AllReportsComponent } from './list-reports/all-reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [{
      path: 'create',
      component: NewReportComponent
    },
    {
      path: 'lookup',
      component: GetEstimationComponent
    },
    {
      path: '',
      component: AllReportsComponent
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
