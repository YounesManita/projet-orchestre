import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  private baseUrl = 'http://localhost:5000/concert';
  httpClient: any;

  constructor(private http: HttpClient) { }
  
  getAllConcert():Observable<any>{
    return this.http.get(this.baseUrl+'/getallconcert')
  }
  createConcert(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/addconcert', data);
  }
  deleteConcert(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteconcert/${id}`);
  }

  updateConcert(id: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + '/updateconcert/' + id, data);
  }
  getConcertById(id:string):Observable<any>{
      return this.http.get(`${this.baseUrl}/getconcert/${id}`)
  }
  marquerpresence(id:String,candidat:String|null):Observable<any>{
    return this.http.put(`${this.baseUrl}/marquerpresence/${id}`,{candidat})
}


marquerabssance(id:String,candidat:String|null):Observable<any>{
  return this.http.put(`${this.baseUrl}/marquerabsence/${id}`,{candidat})
}
getcandidatstatus():Observable<any>{
  return this.http.get(`${this.baseUrl}/getcandidatstatus/6643f24c39945c4cbb58fd1b`)
}
}

