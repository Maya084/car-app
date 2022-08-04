import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    UsersModule,
    ReportsModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class HomeModule { }
