import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
