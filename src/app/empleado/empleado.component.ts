import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  public empleadoList: Empleado[];

  constructor(
    public empleadoService: EmpleadoService
  ) {
  }

  ngOnInit(): void {
    this.llenarTabla();
    this.empleadoService.getEmployees();
    this.resetForm();
  }

  onSubmit(empleadoForm: NgForm) {
    /* this.empleadoService.insertEmployee(empleadoForm.value); */
    if (empleadoForm.value.$id == null) {
      this.empleadoService.insertEmployee(empleadoForm.value);
    }
    else {
      this.empleadoService.updateEmployee(empleadoForm.value);
    }
    this.resetForm(empleadoForm);
  }

  // Para limpiar el formulario
  resetForm(empleadoForm?: NgForm) {
    if (empleadoForm != null) {
      empleadoForm.reset();
    }
    this.empleadoService.selectEmpleado = new Empleado();
  }

  llenarTabla() {
    return this.empleadoService.getEmployees()
      .snapshotChanges()
      .subscribe(item => {
        this.empleadoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$id'] = element.key;
          this.empleadoList.push(x as Empleado);
        });
      });
  }

  editarEmpleado(data: Empleado) {
    this.empleadoService.selectEmpleado = Object.assign({}, data);
  }

  detalleEmpleado () {

  }

  borrarEmpleado($id: string) {
    if (confirm('¿Esta seguro que desea eliminar este Empleado?')) {
      this.empleadoService.deleteEmployee($id);
    }
  }
}
