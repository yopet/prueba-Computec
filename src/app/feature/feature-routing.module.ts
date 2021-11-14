import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { LoginComponent } from './login/login/login.component';
import { TokenGuard } from '@core/guard/token/token.guard';
import { ChartsLineComponent } from './graphics/charts-line/charts-line.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
 
   {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
  {
    path: 'navbar',
    component: NavBarComponent,
    loadChildren: () => import('./nav-bar/nav-bar.module').then(i => i.NavbarModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
