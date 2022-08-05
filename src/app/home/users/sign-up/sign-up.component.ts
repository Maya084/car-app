import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {

  signUpValues = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
    email: ['', [Validators.email, Validators.required, Validators.maxLength(32)]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.checkSignedIn();
  }

  onSignUp(): void {
    if (this.signUpValues.invalid) {
      return;
    }

    this.userService.signUp(this.signUpValues.getRawValue()).subscribe(data => {

    });
  }

  getFControl(value: string) {
    return this.signUpValues.get(value) as FormControl
  }
}
