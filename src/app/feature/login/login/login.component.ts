import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  myForm: FormGroup;
  constructor(
    private readonly router: Router,
    public fb: FormBuilder,
    public servicio: LoginService
  ) {
    this.myForm = fb.group({     
      username: ['prueba@computec.co', [Validators.required,Validators.email]],     
      password: ['123456789',[ Validators.required , 
        Validators.minLength(8)]]  
    });
  }
  ngOnInit(): void { 
  }



  /**
   * Este método no se puede modificar
   * */
  public redirect(): void {
    this.router.navigateByUrl('/navbar/users/list');
  }

  get getControl(){
    return this.myForm.controls;
  }
  
  
  Login(){
    
  this.servicio.login(this.myForm.value).subscribe(
      data => {
        localStorage.setItem("token", data['token']);
        this.redirect();
      }
    ),error => {
        console.error(error);
      };
  }

}
