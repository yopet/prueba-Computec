import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //private Url = "https://reqres.in/api/login";
  private Url = "http://localhost:8080/api/login";

  constructor(private http: HttpClient) { }
  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(datos){    
    return this.http.post(this.Url,datos);
  }
}


