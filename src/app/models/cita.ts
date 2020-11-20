export class Cita {
    $id: string;
    cliente: string;
    mascota: string;
    servicio: string;
    fecha: string;
    hora: string;
}

export class Cliente {
    $key: string;
    nombre: string;
    dui: string;
    direccion: string;
    telefono: number;
    correo: string;
}

export class Mascotas {
    $key: string;
    idmascota: number;
    idcliente: number;
    nombremascota: string;
    raza: string;
    edad: number;
    sexo: string;
}