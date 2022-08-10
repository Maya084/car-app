import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { SharedModule } from '../../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ListUsersComponent,
    UserProfileComponent,
  ]
})
export class UsersModule { }
