import { Provider } from "./provider"
import { Vehicle } from "./vehicle"

export interface Maintenance {
    id_mantenimiento: String,
    id_vehiculo?: String,
    vehiculo?: Vehicle,
    tipo_mantenimiento: String,
    fecha_programada: String,
    act_realizada: String,
    id_proveedor?: String,
    proveedor?: Provider,
    equipo_usado: String,
    observaciones: String,
    total: Number,
    estatus: String
}