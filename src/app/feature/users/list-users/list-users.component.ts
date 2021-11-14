import { Component, OnInit ,ViewChild} from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';

import {MatSnackBar} from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datos;
  delete: String = null;
  displayedColumns: string[] = [ 'Nombre','Correo', 'Imagen', 'Accion'];
 
  constructor(
    public servicio: UsersService ,private _snackBar: MatSnackBar,
    private readonly router: Router,
  ) { }
  ngOnInit() {

    this.servicio.getUsers().subscribe(
      data => {
        this.datos = data;
      }
    ),error => {
        console.error(error);
      };
  }

  deleteUser(dato) {

    this.servicio.deleteUserForIndex(dato.id).subscribe(
      data => {
        let snackBarRef = this._snackBar.open('Usuario eliminado : ' + dato.first_name + ' ' + dato.last_name, 'Undo', {
          duration: 3000
        });
        this.ngOnInit();
      
      }
    ),error => {
        console.error(error);
      };
  }

  public redirectToEditUsers(persona): void {
    this.router.navigate( ['/navbar/users/update', JSON.stringify(persona)]);
  }

}
