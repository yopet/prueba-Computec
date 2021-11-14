import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
  { path: 'create', component: CreateUserComponent },  
  { path: 'update/:id', component: EditUserComponent  },
 // { path: '**', pathMatch: '**', redirectTo: 'navbar/users/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
