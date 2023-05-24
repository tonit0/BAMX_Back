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
exports.VehFailuresService = void 0;
const database_1 = require("../database");
class VehFailuresService {
}
exports.VehFailuresService = VehFailuresService;
_a = VehFailuresService;
VehFailuresService.getVehFailures = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM fallas_vehiculos ORDER BY id_falla DESC');
    let products_services = rows.map((r) => {
        return r;
    });
    return products_services;
});
VehFailuresService.getVehFailureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM fallas_vehiculos WHERE id_falla = ?', [id]);
    let products_services = rows.map((r) => {
        return r;
    });
    return products_services;
});
VehFailuresService.insertVehFailure = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO fallas_vehiculos SET ?', [item]);
    return item;
});
VehFailuresService.updateVehFailure = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE fallas_vehiculos SET ? WHERE id_falla = ?', [item, id]);
    return item;
});
