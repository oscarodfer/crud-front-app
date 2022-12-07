import { Client } from './client';
import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Client[] {
    return CLIENTS;
  }
}
