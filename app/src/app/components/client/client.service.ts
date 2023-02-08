import { Client } from './client';
import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint: string = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    //return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndPoint);
  }
}
