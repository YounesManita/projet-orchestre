import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private baseUrl = 'http://localhost:5000/conge';
  httpClient: any;

  constructor(private http: HttpClient) { }
  getAllConge():Observable<any>{
    return this.http.get(this.baseUrl+'/getallcongeconfirmer')
  }
  getAllCongeRefused():Observable<any>{
    return this.http.get(this.baseUrl+'/getcongeconfirmer')
  }

  accepterconge(id:string):Observable<any>{
    return this.http.put(`${this.baseUrl}/accepterconge/${id}`,{})
}
refuserconge(id:String):Observable<any>{
  return this.http.put(`${this.baseUrl}/refuserconge/${id}`,{})
}

  createConge(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/addconge', data);
  }
}
