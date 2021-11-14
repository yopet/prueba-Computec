import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private Url = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) { }
  
  
  getUsers() {
    return this.http.get(this.Url); 
  }

  createUser(datos) {
    return this.http.post(this.Url,datos);
  }
  editUser(datos) {
    return this.http.put(this.Url,datos);
  }

  deleteUserForIndex(index: number) {
    return this.http.delete(this.Url + '/' + index);    
  }


}
