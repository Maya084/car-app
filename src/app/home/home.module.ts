import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './view/home.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  imports: [
    UsersModule,
    ReportsModule,
    HomeRoutingModule,
    SharedModule,
    LoadingBarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
