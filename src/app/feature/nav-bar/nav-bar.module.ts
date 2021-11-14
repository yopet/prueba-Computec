
import {NavBarComponent} from './nav-bar.component'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from '../users/users-routing.module';
import { NavbarRoutingModule } from './nav-barrouting.module';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    NavbarRoutingModule,
    UsersRoutingModule,
    FlexLayoutModule

  ],
    declarations: [NavBarComponent]
})
export class NavbarModule {
}
