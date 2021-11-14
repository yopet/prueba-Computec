import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../create-user/shared/services/users/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

 
  myForm: FormGroup;
  create:boolean=false
  constructor(
    private readonly router: Router,
    public fb: FormBuilder,
    public servicio: UsersService,private _snackBar: MatSnackBar
  ) {
    this.myForm = fb.group({     
      first_name: ['', [Validators.required]],     
      email: ['',[ Validators.required,Validators.email ]] ,
      avatar :['https://i.dlpng.com/static/png/7262793_preview.png'] 
    });
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/navbar/users/list');
  }
  get getControl(){
    return this.myForm.controls;
  }
  createUser(){
    this.servicio.createUser(this.myForm.value).subscribe(
      data => {
        let snackBarRef = this._snackBar.open('Usuario creado exitosamente', 'Undo', {
          duration: 3000
        });  
        this.redirectToListUsers()   
      }
    ),error => {
        console.error(error);
      };
  }
}
