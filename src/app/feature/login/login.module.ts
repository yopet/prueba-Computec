
import {LoginComponent} from '../login/login/login.component'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';


@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
