import { NgModule } from '@angular/core';
import { ReportsComponent } from './list-reports/reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { GetEstimationComponent } from './get-estimation/get-estimation.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    ReportsRoutingModule, SharedModule
  ],
  declarations: [ReportsComponent, NewReportComponent, GetEstimationComponent],
})
export class ReportsModule { }
