import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../create-user/shared/services/users/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-Edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

 
  myForm: FormGroup;
  Edit:boolean=false
  constructor(
    private readonly router: Router,
    public fb: FormBuilder,
    public servicio: UsersService,private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    let persona = JSON.parse(this.route.snapshot.paramMap.get("id"));
   
    this.myForm = fb.group({   
      id:[persona.id],  
      first_name: [persona.first_name, [Validators.required]],     
      email: [persona.email,[ Validators.required ]]  
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
  EditUser(){
    this.servicio.editUser(this.myForm.value).subscribe(
      data => {
        console.log(data);
        let snackBarRef = this._snackBar.open('Usuario actualizado exitosamente', 'Undo', {
          duration: 3000
        });  
        this.redirectToListUsers()   
      }
    ),error => {
        console.error(error);
      };
  }
}
