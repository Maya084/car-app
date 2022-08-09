import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isNil } from 'lodash';
import { removeNullValuesFromObj } from '../../../shared/helperFunctions';
import { ReportsService } from '../../../shared/services/reports.service';

@Component({
  selector: 'app-get-estimation',
  templateUrl: './get-estimation.component.html',
  styleUrls: ['./get-estimation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetEstimationComponent implements OnInit {

  showPrice = false;
  showDiffMsg = false;
  price: number = 0;

  getEstForm = this.fb.group({
    make: ['', [Validators.required, Validators.minLength(3)]],
    model: ['', [Validators.required, Validators.minLength(3)]],
    year: ['', [Validators.required, , Validators.min(1930), Validators.max(2022)]],
    mileage: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
    lng: ['', [Validators.min(-180), Validators.max(180)]],
    lat: ['', [Validators.min(-90), Validators.max(90)]],
  })

  constructor(
    private fb: FormBuilder,
    private reportsService: ReportsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.showPrice = this.showDiffMsg = false;
    this.cdr.markForCheck();

    if (this.getEstForm.invalid) {
      return;
    }

    const callback = (status: boolean, estPrice: number) => {
      this.price = estPrice;
      this.showDiffMsg = isNil(estPrice) || estPrice === 0;
      this.showPrice = status && !this.showDiffMsg;
      this.cdr.markForCheck();
    }

    const formValue = removeNullValuesFromObj(this.getEstForm.getRawValue());

    this.reportsService.getEstimation(
      formValue,
      callback.bind(this)
    )

  }

  getFControl(name: string): FormControl {
    return this.getEstForm.get(name) as FormControl;
  }

}
