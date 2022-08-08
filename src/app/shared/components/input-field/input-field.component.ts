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
  @Input() type: 'text' | 'password' | 'number' = 'text';

  visibility = false;

  constructor() { }

  get formControlType(): 'text' | 'password' | 'number' {
    return this.type === 'number' || this.type === 'text'
      ? this.type
      : this.visibility
        ? 'text'
        : 'password'
  }

  ngOnInit() {
  }

  clearControl(): void {
    this.fControl.patchValue('');
  }

}
