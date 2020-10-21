import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CitaComponent } from './cita/cita.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascotas/mascota/mascota.component';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';

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
    path: 'cita',
    component: CitaComponent
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
