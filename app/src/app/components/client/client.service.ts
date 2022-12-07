import { Client } from './client';
import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
