import { Component, OnInit } from '@angular/core';
import { Cita } from '../models/cita';
import { Cliente } from '../models/cita';
import { Mascotas } from '../models/cita';
import { CitaService } from '../services/cita.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  public cita: any[];
  public citaList: Cita[];
  public clientList: Cliente[];
  public petList: Mascotas[];

  constructor(
    public citaService: CitaService
  ) {
  }

  ngOnInit(): void {
    this.llenarTabla();
    this.llenarComboClientes();
    this.llenarComboMascotas();
    this.citaService.getDates();
    this.resetForm();
  }

  onSubmit(citasForm: NgForm) {
    if (citasForm.value.$id == null) {
      this.citaService.insertDate(citasForm.value);
    }
    else {
      this.citaService.updateDate(citasForm.value);
    }
    this.resetForm(citasForm);
  }

  // Para limpiar el formulario
  resetForm(citasForm?: NgForm) {
    if (citasForm != null) {
      citasForm.reset();
    }
    this.citaService.selectCita = new Cita();
  }

  llenarTabla() {
    return this.citaService.getDates()
      .snapshotChanges()
      .subscribe(item => {
        this.citaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$id'] = element.key;
          this.citaList.push(x as Cita);
        });
      });
  }

  llenarComboClientes() {
    return this.citaService.getClientes()
      .snapshotChanges()
      .subscribe(item => {
        this.clientList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$id'] = element.key;
          this.clientList.push(x as Cliente);
        });
      });
  }

  llenarComboMascotas() {
    return this.citaService.getMascotas()
      .snapshotChanges()
      .subscribe(item => {
        this.petList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$id'] = element.key;
          this.petList.push(x as Mascotas);
        });
      });
  }

  editarCita(data: Cita) {
    this.citaService.selectCita = Object.assign({}, data);
  }

  verCita ($id: string) {
    return this.cita = this.citaList.filter(data => data.$id === $id);
  }

  borrarCita($id: string) {
    if (confirm('¿Concluir cita Cita?')) {
      this.citaService.deleteDate($id);
    }
  }

}
