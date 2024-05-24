import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepititionService {

  private baseUrl = 'http://localhost:5000/repetition';
  httpClient: any;

  constructor(private http: HttpClient) { }

  createRepetition(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'/postrepition',data);
    
  }
  getAllRepitition():Observable<any>{
    return this.http.get(this.baseUrl+'/getallrepition')
  }
}
