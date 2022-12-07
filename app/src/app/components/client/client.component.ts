import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }
}
