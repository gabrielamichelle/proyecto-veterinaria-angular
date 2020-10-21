import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CitaComponent } from './cita/cita.component';
import { CatalogoServicioComponent} from './catalogo-servicio/catalogo-servicio.component';
// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
//import { AuthGuard } from "../../shared/guard/auth.guard";
import { VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';
import { AuthGuard } from "./guard/auth.guard";
import { from } from 'rxjs';
import { ProductosComponent } from './productos/productos.component';
import { ExpedientemascotaComponent } from './expedientemascota/expedientemascota.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascotas/mascota/mascota.component';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
{ path: 'sign-in', component: SignInComponent },
{ path: 'register-user', component: SignUpComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servicios',
    component: CatalogoServicioComponent
  },
  {
    path: 'empleado',
    component: EmpleadoComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'expedientemascota',
    component: ExpedientemascotaComponent
  },
  {
    path: 'cita',
    component: CitaComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'mascotas',
    component: MascotasComponent
  },
  {
    path: 'mascota',
    component: MascotaComponent
  },
  {
    path: 'mascota-list',
    component: MascotaListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
