import { NgModule } from '@angular/core';
import { UsersComponent } from './list-users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    SignUpComponent,
    SignInComponent
  ]
})
export class UsersModule { }
