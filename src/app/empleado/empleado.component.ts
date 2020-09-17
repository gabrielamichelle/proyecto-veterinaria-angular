import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  employees: Observable<Empleado[]>;
  employee: Empleado = new Empleado();
  createForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;

  constructor(
    private empleadoService: EmpleadoService,
    private formBuilder: FormBuilder
  ) {
    /* en caso de colocar mas de una validacion seria de la siguiente manera
     * Validators.compose([Validators.email, Validators.email])
     */
    this.createForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      dui: ['', Validators.required],
      nit: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      rol: [Validators.required],
      cargo: [Validators.required],
      estado: ['Activo', Validators.required]
    });

    this.editForm = this.formBuilder.group({
     id: [Validators.required],
     nombre: ['', Validators.required],
     dui: ['', Validators.required],
     nit: ['', Validators.required],
     direccion: ['', Validators.required],
     telefono: ['', Validators.required],
     rol: [Validators.required],
     cargo: [Validators.required],
     estado: [Validators.required]
    });

    this.deleteForm = this.formBuilder.group({
     id: [Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllEmployes();
  }

  // subscribe() es un metodo de tipo observable
  getAllEmployes() {
    this.employees = this.empleadoService.getAllEmployes();
  }

  getEmploye(id: number) {
    this.empleadoService.getEmploye(id)
      .subscribe(data => {
        this.employee = data;
    });
  }

  createEmploye(empleado: Empleado) {
    this.empleadoService.createEmploye(empleado)
      .subscribe((data) => {
        this.employee = data;
        this.getAllEmployes();
      });
  }

  // llenar form de edicion
  fillEditForm(id: number) {
    this.empleadoService.getEmploye(id)
      .subscribe(data => {
        this.employee = data;
        this.editForm.patchValue({
          id: this.employee.id,
          nombre: this.employee.nombre,
          dui: this.employee.dui,
          nit: this.employee.nit,
          direccion: this.employee.direccion,
          telefono: this.employee.telefono,
          rol: this.employee.rol,
          cargo: this.employee.cargo
        });
    });
  }

  updateEmploye(empleado: Empleado) {
    this.empleadoService.updateEmploye(empleado)
      .subscribe((data) => {
        this.employee = data;
        this.getAllEmployes();
    });
  }

  deactivateEmploye(id: number) {
    this.empleadoService.getEmploye(id)
      .subscribe(data => {
        this.employee = data;
        this.employee.estado = 'Inactivo';
        this.empleadoService.updateStatus(this.employee)
        .subscribe((dato) => {
          this.getAllEmployes();
        });
    });
  }

  deleteEmploye(id: number) {
    this.empleadoService.deleteEmploye(id)
      .subscribe((data) => {
        this.getAllEmployes();
      });
  }
}
