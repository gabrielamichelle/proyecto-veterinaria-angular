import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { UserService } from "./services/user.service";

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CitaComponent } from './cita/cita.component';
import { CatalogoServicioComponent } from './catalogo-servicio/catalogo-servicio.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProductosComponent } from './productos/productos.component';
import { ExpedientemascotaComponent } from './expedientemascota/expedientemascota.component';
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
    CatalogoServicioComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    
    ProductosComponent,
    ExpedientemascotaComponent,
    ClienteComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [ClienteService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
