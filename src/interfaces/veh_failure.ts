import { Vehicle } from "./vehicle"

export interface VehFailure {
    id_falla: String,
    id_vehiculo?: String,
    vehiculo?: Vehicle,
    descripcion: String,
    preferencia_de_entrega: String,
    fecha_falla: String,
    fecha_solucion: String,
    reparacion_realizada: String,
    refacciones_utlizadas: String,
    costo_reparacion: Number,
    estatus: String
}