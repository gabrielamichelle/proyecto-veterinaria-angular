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

// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Toastr, para notificaciones en angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascotas/mascota/mascota.component';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';

//service
import { MascotasService } from './services/mascotas.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmpleadoComponent,
    PageNotFoundComponent,
    CitaComponent,
    MascotasComponent,
    MascotaComponent,
    MascotaListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
