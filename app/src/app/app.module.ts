import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ClientComponent } from './components/client/client.component';
import { ClientService } from './components/client/client.service';
import { FormComponent } from './components/client/form.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const ROUTES: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directives', component: DirectiveComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientComponent,
    FormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
