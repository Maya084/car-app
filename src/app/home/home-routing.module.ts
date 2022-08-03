import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        path: '', redirectTo: 'users/sign-in'
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'reports',
        // canActivate: [AuthGuard]
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
