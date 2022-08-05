import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './view/auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    SharedModule,
    LoadingBarModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
