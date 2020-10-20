import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CitaComponent } from './cita/cita.component';
import { ClienteComponent } from './cliente/cliente.component';

//import { environment } from '../environments/environment';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from '@angular/fire/database';

//Service
import { ClienteService } from './servicecliente/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmpleadoComponent,
    PageNotFoundComponent,
    CitaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    //En caso de no tenerlo, se debe agregar firebase
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
