import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ClientComponent } from './components/client/client.component';
import { ClientService } from './components/client/client.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
