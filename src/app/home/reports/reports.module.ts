import { NgModule } from '@angular/core';
import { AllReportsComponent } from './list-reports/all-reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { GetEstimationComponent } from './get-estimation/get-estimation.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    ReportsRoutingModule, 
    SharedModule
  ],
  declarations: [
    ReportsComponent,
    AllReportsComponent, 
    NewReportComponent, 
    GetEstimationComponent
  ],
})
export class ReportsModule { }
