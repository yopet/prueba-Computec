import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';

import {HomeUserComponent} from './home-user/home-user.component'
import {ListUsersComponent} from './list-users/list-users.component'
import {CreateUserComponent} from './create-user/create-user.component'
import {EditUserComponent} from './edit-user/edit-user.component'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';


@NgModule({
    imports: [   RouterModule ,CommonModule ,UsersRoutingModule,FormsModule,ReactiveFormsModule,MaterialModule],
    declarations: [HomeUserComponent,ListUsersComponent,CreateUserComponent,EditUserComponent]
})
export class UsersModule {
}
