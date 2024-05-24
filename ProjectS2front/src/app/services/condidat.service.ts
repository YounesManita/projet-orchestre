import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  private baseUrl = 'http://localhost:5000/candidat';
  httpClient: any;

  constructor(private http: HttpClient) { }

  
  getAllCandidates():Observable<any>{
    return this.http.get(this.baseUrl+'/getallcandiat')
  }
  createCandidate(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/addcandiat', data);
  }
  acceptation(data:any):Observable<any>{
    return this.http.post(this.baseUrl + '/getCandBasoin', data);
  }
  
}
