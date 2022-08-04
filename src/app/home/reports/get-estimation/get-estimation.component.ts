import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-estimation',
  templateUrl: './get-estimation.component.html',
  styleUrls: ['./get-estimation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetEstimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
