import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:5000/user/login';

  
  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post<any>(this.loginUrl, { email, password });
  }
  ChangePassword(id:string,password:string):Observable<any>{
    return this.http.put(`http://localhost:5000/user/changerpassword/${id}`,{password:password})
  }
}
