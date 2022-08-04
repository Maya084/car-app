import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
