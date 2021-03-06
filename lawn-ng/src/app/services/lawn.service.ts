import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LawnService {

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getLawn(id: string): Observable<any> {
    return this.http.get<any>(baseURL + 'lawns/' + id);
  }

  pushLawn(id: any, body: any): Observable<any> {
    return this.http.post<any>(baseURL + 'lawns/' + id, body);
  }
}
