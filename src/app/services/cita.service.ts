import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
// Model
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  citaList: AngularFireList<any>;
  clienteList: AngularFireList<any>;
  mascotaList: AngularFireList<any>;
  selectCita: Cita = new Cita();
  cita: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getDates() {
    return this.citaList = this.firebase.list('citas');
  }

  getClientes() {
    return this.clienteList = this.firebase.list('cliente');
  }

  getDate($id: string) {
    return this.cita = this.firebase.list('citas', data => data.equalTo($id));
  }

  insertDate(data: Cita) {
    this.citaList.push({
      cliente: data.cliente,
      mascota: data.mascota,
      servicio: data.servicio,
      fecha: data.fecha,
      hora: data.hora
    });
  }

  updateDate(data: Cita) {
    this.citaList.update(data.$id, {
      cliente: data.cliente,
      mascota: data.mascota,
      servicio: data.servicio,
      fecha: data.fecha,
      hora: data.hora
    });
  }

  deleteDate($id: string) {
    this.citaList.remove($id);
  }

}
