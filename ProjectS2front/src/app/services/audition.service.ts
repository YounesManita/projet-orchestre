import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditionService {

  private baseUrl = 'http://localhost:5000/CandAud';
  httpClient: any;

  constructor(private http: HttpClient) { }
  
  getAllAudition():Observable<any>{
    return this.http.get('http://localhost:5000/Audition/getaudglobal')
  }
  createAudition(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/addCandA', data);
  }
  createAuditionGlobal(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/Audition/generateAudition', data);

  }
  acceptationCompte(token:any): Observable<any>{
    return this.http.post(`http://localhost:5000/candidat/confirmation/${token}`,{})
  }
}
