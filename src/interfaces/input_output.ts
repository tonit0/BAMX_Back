import { Trail } from "./trail"
import { Vehicle } from "./vehicle"

export interface InputOutput {
    id_entrada_salida: String,
    id_vehiculo: String,
    vehiculo?: Vehicle,
    id_ruta: String,
    ruta?: Trail,
    litros_consumidos: Number,
    importe: Number,
    kilometraje: Number,
    fecha: String,
    hora_salida: String,
    hora_entrada: String,
    estatus: String
}