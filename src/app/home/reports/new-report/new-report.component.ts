import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReportsService } from '../../../shared/services/reports.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewReportComponent implements OnInit {

  newReportForm = this.fb.group({
    make: ['', [Validators.required, Validators.minLength(3)]],
    model: ['', [Validators.required, Validators.minLength(3)]],
    year: ['', [Validators.required, , Validators.min(1930), Validators.max(2022)]],
    mileage: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
    lng: ['', [Validators.required, Validators.min(-180), Validators.max(180)]],
    lat: ['', [Validators.required, Validators.min(-90), Validators.max(90)]],
    price: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
  })

  constructor(
    private fb: FormBuilder,
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  getFControl(name: string): FormControl {
    return this.newReportForm.get(name) as FormControl;
  }

  onSubmit(): void {
    if(this.newReportForm.invalid){
      return;
    }
    this.reportsService.createNewReport(this.newReportForm.getRawValue());
  }

}
