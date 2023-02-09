import { Client } from './client';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClientService {
  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  getClientBy(id): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`);
  }

  createNewClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, { headers: this.httpHeaders });
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndPoint}/${client.id}`, client, {headers: this.httpHeaders});
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}