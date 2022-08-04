import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  signInValues = this.fb.group({
    email: ['', [Validators.email, Validators.required, Validators.maxLength(32)]],
    // name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
    // lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userService.isSignedIn) {
      this.router.navigateByUrl('/reports');
    }
  }

  getFControl(value: string) {
    return this.signInValues.get(value)?.value
  }

  onSubmit(): void {
    if (this.signInValues.invalid) {
      return;
    }

    this.userService.signIn(this.signInValues.getRawValue()).subscribe(
      data => {
        console.log(data);
      }
    );
    console.log(this.signInValues.getRawValue());
  }

  signUp(): void{
    this.router.navigateByUrl('/sign-up')
  }

}
