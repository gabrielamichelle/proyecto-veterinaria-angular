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


// Toastr, para notificaciones en angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Auth service
import { UserService } from "./services/user.service";
import { FacturaService} from "./services/factura.service";

// services
import { EmpleadoService } from './services/empleado.service';

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

// firebase
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Toastr, para notificaciones en angular
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascotas/mascota/mascota.component';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';

//service
import { MascotasService } from './services/mascotas.service';

import { FacturaComponent } from './components/factura/factura.component';
import { FacturasComponent } from './components/factura/facturas/facturas.component';
import { FacturaListComponent } from './components/factura/factura-list/factura-list.component';
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
    FacturaComponent,
    FacturasComponent,
    FacturaListComponent,
    
    ProductosComponent,
    ExpedientemascotaComponent,
    ClienteComponent,
    MascotasComponent,
    MascotaComponent,
    MascotaListComponent
  ],
  
  //providers: [UserService,],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [ClienteService,UserService,EmpleadoService,FacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
