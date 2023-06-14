"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const database_1 = require("../database");
const brands_1 = require("./brands");
class VehiclesService {
}
exports.VehiclesService = VehiclesService;
_a = VehiclesService;
VehiclesService.getVehicles = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = [];
    let [rows] = yield database_1.connection.execute('SELECT * FROM vehiculos ORDER BY id_vehiculo DESC');
    let vehicles = rows.map((r) => {
        return r;
    });
    for (let i = 0; i < vehicles.length; i++) {
        const brand = yield brands_1.BrandsService.getBrandById(vehicles[i].id_marca.toString());
        delete vehicles[i].id_marca;
        vehicles[i].marca = brand[0];
        response.push(vehicles[i]);
    }
    return response;
});
VehiclesService.getVehicleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = [];
    let [rows] = yield database_1.connection.execute('SELECT * FROM vehiculos WHERE id_vehiculo = ?', [id]);
    let vehicles = rows.map((r) => {
        return r;
    });
    for (let i = 0; i < vehicles.length; i++) {
        const brand = yield brands_1.BrandsService.getBrandById(vehicles[i].id_marca.toString());
        delete vehicles[i].id_marca;
        vehicles[i].marca = brand[0];
        response.push(vehicles[i]);
    }
    return response;
});
VehiclesService.insertVehicle = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO vehiculos SET ?', [item]);
    return item;
});
VehiclesService.updateVehicle = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE vehiculos SET ? WHERE id_vehiculo = ?', [item, id]);
    return item;
});
