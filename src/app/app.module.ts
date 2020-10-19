import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { HttpClientModule } from '@angular/common/http'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// services
import { EmpleadoService } from './services/empleado.service';

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CitaComponent } from './cita/cita.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmpleadoComponent,
    PageNotFoundComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
