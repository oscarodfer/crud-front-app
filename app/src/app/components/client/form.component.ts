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
  public errors: string[];

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
    this.clientService.createNewClient(this.client).subscribe({
      next: (json) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${json.message} ${json.client.name}`,
          showConfirmButton: false,
          timer: 2000
        })
      },
      error: (err) => {
        this.errors = err.error.errors as string[];
        console.error(err.status + " - " + err.error.errors);
      },
      complete: () => {
        this.router.navigate(['/clients']);
      }
    });
  }

  public updateClient(): void {
    this.clientService.updateClient(this.client).subscribe({
      next: (json) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${json.message} ${json.client.name}`,
          showConfirmButton: false,
          timer: 2000
        })
      },
      error: (err) => {
        this.errors = err.error.errors as string[];
        console.error(err.status + " - " + err.error.errors);
      },
      complete: () => {
        this.router.navigate(['/clients']);
      }
    });
  }
}
