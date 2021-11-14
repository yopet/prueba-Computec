import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { ListUsersComponent } from '../users/list-users/list-users.component';


const routes: Routes = [
  
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then(i => i.UsersModule),
  },
  {
    path: 'graficos',
    loadChildren: () => import('../graphics/graphics.module').then(i => i.GraphicsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {
}


