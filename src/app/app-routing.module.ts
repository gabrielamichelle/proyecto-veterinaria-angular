import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CitaComponent } from './cita/cita.component';
import { CatalogoServicioComponent} from './catalogo-servicio/catalogo-servicio.component';
import { from } from 'rxjs';
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
    path: 'servicios',
    component: CatalogoServicioComponent
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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
