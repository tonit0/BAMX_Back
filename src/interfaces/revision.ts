import { Vehicle } from "./vehicle"

export interface Revision {
    id_revision: Number,
    id_vehiculo: Number,
    vehiculo?: Vehicle,
    fecha: String,
    hora: String,
    conductor: Number,
    id_empleado: Number,
    destino: String,
    nivel_combustible: Number,
    kilometraje_inicial: Number,
    nivel_aceite_motor: Number,
    nivel_aceite_transmision: Number,
    nivel_aceite_power: Number,
    nivel_agua: Number,
    nivel_liquido_frenos: Number,
    revision_fugas_fluidos: Number,
    revision_luces: Number,
    carroceria: Number,
    placas: Number,
    estado_llantas: Number,
    tarjeta_circulacion_vigente: Number,
    tarjeton_casetas_cobro: Number,
    poliza_seguro_vigente: Number,
    llanta_extra: Number,
    revision_cruceta: Number,
    revision_gato_hidraulico: Number,
    tapon_gasolina: Number,
    observaciones: String
}