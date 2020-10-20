import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../servicecliente/cliente.service';
import { Cliente } from '../modelcliente/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  public client: any[];
  public clienteList: Cliente[];

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.llenarTabla();
    this.clienteService.getClient();
    this.resetForm();
  }

  onSubmit(clienteForm: NgForm) {
    if(clienteForm.value.$key == null){
     this.clienteService.insertClient(clienteForm.value);
    }
    else{
      this.clienteService.updateClient(clienteForm.value);
    }
    this.resetForm(clienteForm);
    }
  
    /*Editar(clienteForm: NgForm) {
      this.clienteService.updateClient(clienteForm.value);
  
      this.resetForm(clienteForm); 
    }*/

    Editar(data: Cliente) {
      this.clienteService.selectedClient = Object.assign({}, data);
    }
  
    Borrar($key: string) {
     if (confirm('Estas seguro de eliminar este cliente?')) {
        this.clienteService.deleteClient($key);
      }
    }
  
    verCliente ($key: string) {
      return this.client = this.clienteList.filter(data => data.$key === $key);
    }
  
    // Para limpiar el formulario
   resetForm(clienteForm?: NgForm) {
      if (clienteForm != null){
        clienteForm.reset();
      }
      this.clienteService.selectedClient = new Cliente();
    }
  
    //Llenando la tabla de datos
    llenarTabla() {
      return this.clienteService.getClient()
        .snapshotChanges()
        .subscribe(item => {
          this.clienteList = [];
          item.forEach(element => {
            let x = element.payload.toJSON();
            x['$key'] = element.key;
            this.clienteList.push(x as Cliente);
          });
        });
    }

}
