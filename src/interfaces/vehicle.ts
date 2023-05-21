import { Brand } from "./brand"

export interface Vehicle {
    id_vehiculo: String,
    nombre_vehiculo: String,
    id_marca: String,
    marca?: Brand,
    modelo: String,
    numero_serie_chasis: String,
    numero_motor: String,
    color: String,
    tipo_combustible: String,
    capacidad_tanque: Number,
    rendimiento_combustible: Number,
    placas: String,
    url_foto: String,
    estatus: String
}