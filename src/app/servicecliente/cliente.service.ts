import { Injectable } from '@angular/core';
import { Cliente } from '../modelcliente/cliente'
// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'; //Si da error en esta linea es porque se debe instalar firebase al proyecto

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Traer los datos de firebase
  clienteList: AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo Cliente
  selectedClient: Cliente = new Cliente();
  client: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los datos desde firebase 
  getClient() { // guarda los elementos 
    return this.clienteList = this.firebase.list('cliente');
   }

   getaClient($key: string) {
    return this.client = this.firebase.list('cliente', data => data.equalTo($key));
  }
 
   // crear un nuevo cliente  , recibiendo un parametro de tipo Cliente
   insertClient(data: Cliente) {
     // agregar un dato al final de la lista, como recibe un objeto del tipo Cliente , puede acceder a sus propiedades
     this.clienteList.push({
       nombre: data.nombre,
       dui: data.dui,
       direccion: data.direccion,
       telefono: data.telefono,
       correo: data.correo
     });
   }
 
   // Actualiza un cliente, recibiendo un parametro de tipo Client
   updateClient(data: Cliente) {
     // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
     this.clienteList.update(data.$key, {
      nombre: data.nombre,
      dui: data.dui,
      direccion: data.direccion,
      telefono: data.telefono,
      correo: data.correo
     });
   }
 
   // Elimina un cliente, recibiendo como parametro la clave , utilizando el metodo remove de firebase
   deleteClient($key: string) {
     this.clienteList.remove($key);
   }
}
