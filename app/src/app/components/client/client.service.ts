import { Router } from '@angular/router';
import { Client } from './client';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable()
export class ClientService {
  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  getClientBy(id): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clients']);
        console.error(`${e.status} - ${e.error.message} ${e.error.error}`);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error searching',
          text: `${e.status} - ${e.error.message} ${e.error.error}`
        });
        return throwError(() => e);
      })
    );
  }

  createNewClient(client: Client): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, client, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status==400) {
          return throwError(() => e);
        }
        console.error(`${e.status} - ${e.error.message} ${e.error.error}`);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error creating',
          text: `${e.status} - ${e.error.message} ${e.error.error}`
        });
        return throwError(() => e);
      })
    );
  }

  updateClient(client: Client): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${client.id}`, client, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status==400) {
          return throwError(() => e);
        }
        console.error(`${e.status} - ${e.error.message} ${e.error.error}`);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error updating',
          text: `${e.status} - ${e.error.message} ${e.error.error}`
        });
        return throwError(() => e);
      })
    );
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}