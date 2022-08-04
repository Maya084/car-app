import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent implements OnInit {

  @Input() fControl!: FormControl;
  @Input() name!: string;

  constructor() { }

  ngOnInit() {
  }

  clearControl(): void {
    this.fControl.patchValue('');
  }

}
