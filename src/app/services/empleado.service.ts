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

  /* getAllEmployes(): Observable<any> {
    const path = `${this.api}/empleado/`;
    return this.http.get(path);
  }

  getEmploye(id: number): Observable<any> {
    const path = `${this.api}/empleado/${id}`;
    return this.http.get(path);
  }

  createEmploye(empleado: Empleado): Observable<any> {
    const path = `${this.api}/empleado`;
    return this.http.post(path, empleado);
  }

  updateEmploye(empleado: Empleado): Observable<any> {
    const path = `${this.api}/empleado/${empleado.id}`;
    return this.http.put(path, empleado);
  }

  updateStatus(empleado: Empleado): Observable<any> {
    const path = `${this.api}/empleado/${empleado.id}`;
    return this.http.patch(path, empleado);
  }

  deleteEmploye(id: number): Observable<any> {
    const path = `${this.api}/empleado/${id}`;
    return this.http.delete(path);
  } */
}
