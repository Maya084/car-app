import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './view/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    children: [
      {
        path: 'users',
        component: ListUsersComponent,
      },
      {
        path: 'users/:userID',
        component: UserProfileComponent
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent
      },
      {
        path: 'reports',
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
