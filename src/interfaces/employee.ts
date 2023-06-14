import { Position } from "./position"

export interface Employee {
    id_empleado: String,
    nombre: String,
    apellido1: String,
    apellido2: String,
    telefono: String,
    correo: String,
    id_puesto?: String,
    puesto: Position,
    rfc: String,
    direccion: String,
    curp: String,
    estatus: String
}