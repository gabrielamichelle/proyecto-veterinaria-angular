import { Component, OnInit } from '@angular/core';

// model
import { Mascotas } from '../../models/mascotas';
// service
import { MascotasService } from '../../services/mascotas.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {
  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  mascotasList: Mascotas[];
  busqueda:string;
  

  constructor(
    public mascotaService: MascotasService,
    public toastr: ToastrService

) { }

  ngOnInit() {
    return this.mascotaService.getMascotas()
    .snapshotChanges().subscribe(item => {
      this.mascotasList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mascotasList.push(x as Mascotas);
      });
    });


  }

  onEdit(mascotas: Mascotas) {
    this.mascotaService.selectedMascotas = Object.assign({}, mascotas);
  }

  /* 
   Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteProduct' del servicio de firebase
   ademas muestra un 'warning' con toastr
*/
  onDelete($key: string) {
    if (confirm('Confirme el borrado del registro')) {
      this.mascotaService.deleteMascotas($key);
      this.toastr.warning('Borrado exitoso', 'Registro removido');
    }
  }

  Buscar(){
    this.mascotasList = this.mascotasList.filter(data =>{
    return  data.idcliente.toString().trim()==this.busqueda;
    })

    if(this.mascotasList.length==0){
      this.mascotaService.getMascotas()
    .snapshotChanges().subscribe(item => {
      this.mascotasList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mascotasList.push(x as Mascotas);
      });
    });
      this.toastr.info('Dato No Encontrado', 'Consulta Realizada');
      this.busqueda='';
    }
    else{
      this.toastr.success('Dato Encontrado', 'Consulta Realizada');
    }
  }

 Seleccion(mascotas: Mascotas) {
 this.mascotaService.selectedMascotas = Object.assign({}, mascotas);
  }



}
