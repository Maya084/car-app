import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './list-reports/reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { GetEstimationComponent } from './get-estimation/get-estimation.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [
    CommonModule, ReportsRoutingModule
  ],
  declarations: [ReportsComponent, NewReportComponent, GetEstimationComponent]
})
export class ReportsModule { }
