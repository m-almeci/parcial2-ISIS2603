import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from './banda';
import { environment } from '../../environments/environment';
import { bandadetalle } from './banda-detalle';

@Injectable({
  providedIn: 'root'
})
export class bandaService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }

  getBanda(id: string): Observable<bandadetalle> {
    return this.http.get<bandadetalle>(this.apiUrl + '/' + id);
  }

}
