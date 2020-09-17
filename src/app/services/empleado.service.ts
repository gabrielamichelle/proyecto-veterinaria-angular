import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private api = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployes(): Observable<any> {
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
  }
}
