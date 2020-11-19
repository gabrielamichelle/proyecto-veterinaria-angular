import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
// Model
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoList: AngularFireList<any>;
  selectEmpleado: Empleado = new Empleado();
  empleado: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getEmployees() {
    return this.empleadoList = this.firebase.list('empleados');
  }

  getEmployee($id: string) {
    return this.empleado = this.firebase.list('empleados', data => data.equalTo($id));
  }

  insertEmployee(data: Empleado) {
    this.empleadoList.push({
      nombre: data.nombre,
      dui: data.dui,
      nit: data.nit,
      direccion: data.direccion,
      telefono: data.telefono,
      cargo: data.cargo
    });
  }

  updateEmployee(data: Empleado) {
    this.empleadoList.update(data.$id, {
      nombre: data.nombre,
      dui: data.dui,
      nit: data.nit,
      direccion: data.direccion,
      telefono: data.telefono,
      cargo: data.cargo
    });
  }

  deleteEmployee($id: string) {
    this.empleadoList.remove($id);
  }

}
