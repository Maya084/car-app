import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    ListUsersComponent,
  ]
})
export class UsersModule { }
