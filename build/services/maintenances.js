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
exports.MaintenancesService = void 0;
const database_1 = require("../database");
class MaintenancesService {
}
exports.MaintenancesService = MaintenancesService;
_a = MaintenancesService;
MaintenancesService.getMaintenances = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM mantenimientos ORDER BY id_mantenimiento DESC');
    let maintenances = rows.map((r) => {
        return r;
    });
    return maintenances;
});
MaintenancesService.getMaintenanceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM mantenimientos WHERE id_mantenimiento = ?', [id]);
    let maintenances = rows.map((r) => {
        return r;
    });
    return maintenances;
});
MaintenancesService.insertMaintenance = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO mantenimientos SET ?', [item]);
    return item;
});
MaintenancesService.updateMaintenance = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE mantenimientos SET ? WHERE id_mantenimiento = ?', [item, id]);
    return item;
});
