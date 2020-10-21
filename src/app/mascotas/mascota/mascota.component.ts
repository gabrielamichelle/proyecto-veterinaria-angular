import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MascotasService } from '../../services/mascotas.service';
import { Mascotas } from '../../models/mascotas';

// toastr
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  constructor(

    public mascotasService: MascotasService,
    public toastr: ToastrService
 ) { }

  ngOnInit() {
    this.mascotasService.getMascotas();
    this.resetForm();
 }
 onSubmit(mascotasForm: NgForm) {
  if (mascotasForm.value.$key == null)
    this.mascotasService.insertMascota(mascotasForm.value);
  else
    this.mascotasService.updateMascota(mascotasForm.value);

  this.resetForm(mascotasForm);
  this.toastr.success('Operacion exitosa', 'Registro Realizado');
}

// Para limpiar el formulario
resetForm(mascotasForm?: NgForm) {
  if (mascotasForm != null)
    mascotasForm.reset();
  this.mascotasService.selectedMascotas = new Mascotas();
}






}
