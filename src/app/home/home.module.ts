import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    ReportsModule,
    HomeRoutingModule
  ],
  declarations: []
})
export class HomeModule { }
