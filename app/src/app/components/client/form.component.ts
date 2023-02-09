import { ClientService } from './client.service';
import { Client } from './client';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./client.component.css']
})
export class FormComponent {
  public client: Client = new Client();
  public newTitle: string = "New Client";
  public updateTitle: string = "Update Client";

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.loadClient();
  }

  public loadClient(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.clientService.getClientBy(id).subscribe((client) => this.client = client);
        }
      }
    );
  }

  public createNewClient(): void {
    this.clientService.createNewClient(this.client).subscribe(
      client => {
        this.router.navigate(['/clients']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Client created successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }

  public updateClient(): void {
    this.clientService.updateClient(this.client).subscribe(
      client => {
        this.router.navigate(['/clients']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Client ${client.name} updated successfully`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}
