import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../shared/services/reports.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllReportsComponent implements OnInit {

  allReports = this.reportsService.reports$;

  constructor(
    private reportsService:ReportsService
  ) { }

  ngOnInit() {
  }

}
