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
import { CatalogoServicioComponent } from './catalogo-servicio/catalogo-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmpleadoComponent,
    PageNotFoundComponent,
    CitaComponent,
    CatalogoServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
