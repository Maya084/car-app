import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { HomeComponent } from './view/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'preffix' },
      {
        path: 'users',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'reports',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
