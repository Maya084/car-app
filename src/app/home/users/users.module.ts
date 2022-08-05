import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    ListUsersComponent,
    SignUpComponent,
    SignInComponent,
    UsersComponent
  ]
})
export class UsersModule { }
