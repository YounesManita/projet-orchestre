import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Precondidat } from '../models/Precondidat.model';

@Injectable({
  providedIn: 'root'
})
export class PrecondidatService {
  private baseUrl = 'http://localhost:5000/precandidat';
  httpClient: any;

  constructor(private http: HttpClient) { }

  addprecondidat(precondidatData:Precondidat): Observable<any> {
  
    return this.http.post(this.baseUrl+'/addprecandiat',precondidatData);
  }
  validationemail(token:any):Observable<any>{
  
    return this.http.put(`${this.baseUrl}/confirmedcompte/${token}`,{})
  }
  
  lancerSaisonAndSendEmails(): Observable<any>{
    return this.http.post(this.baseUrl+'/lancersaison',{})
  }
  getAllCandidates():Observable<any>{
    return this.http.get(this.baseUrl+'/allprecandidat')
  }
}
