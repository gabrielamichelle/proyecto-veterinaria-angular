import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CitaComponent } from './cita/cita.component';
import { ProductosComponent } from './productos/productos.component';
import { ExpedientemascotaComponent } from './expedientemascota/expedientemascota.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
