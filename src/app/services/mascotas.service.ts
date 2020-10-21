import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mascotas } from '../models/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
// Traer los datos de firebase
  mascotasList: AngularFireList<any>;
  // Una variable temporal, para guardar los datos seleccionados, del tipo Product
  selectedMascotas: Mascotas = new Mascotas();


constructor(private firebase: AngularFireDatabase) { }

 // Traer todos los productos desde firebase 
 getMascotas() { // guarda los elementos en la varible 'products'
 return this.mascotasList = this.firebase.list('products');
}

 // crear un nuevo producto  , recibiendo un parametro de tipo Product
 insertMascota(mascotas: Mascotas) {
  // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
  this.mascotasList.push({
    idmascota: mascotas.idmascota,
    idcliente: mascotas.idcliente,
    nombremascota: mascotas.nombremascota,
    raza: mascotas.raza,
    edad: mascotas.edad,
    sexo: mascotas.sexo
  });
}

// Actualiza un producto, recibiendo un parametro de tipo Product
updateMascota(mascotas: Mascotas) {
  // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
  this.mascotasList.update(mascotas.$key, {
    idmascota: mascotas.idmascota,
    idcliente: mascotas.idcliente,
    nombremascota: mascotas.nombremascota,
    raza: mascotas.raza,
    edad: mascotas.edad,
    sexo: mascotas.sexo
  });
}

// Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
deleteMascotas($key: string) {
  this.mascotasList.remove($key);
}


}
