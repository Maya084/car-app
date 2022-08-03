import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './list-users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule, UsersRoutingModule
  ],
  declarations: [UsersComponent, SignUpComponent, SignInComponent]
})
export class UsersModule { }
