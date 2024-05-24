import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {
  private baseUrl = 'http://localhost:5000/Oeuvre';
  httpClient: any;

  constructor(private http: HttpClient) { }

  createRepetition(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'/addoeuvre',data);
    
  }
}
