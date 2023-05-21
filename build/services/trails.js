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
exports.TrailsService = void 0;
const database_1 = require("../database");
class TrailsService {
}
exports.TrailsService = TrailsService;
_a = TrailsService;
TrailsService.getTrails = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM rutas ORDER BY id_ruta DESC');
    let trails = rows.map((r) => {
        return r;
    });
    return trails;
});
TrailsService.getTrailById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM rutas WHERE id_ruta = ?', [id]);
    let trails = rows.map((r) => {
        return r;
    });
    return trails;
});
TrailsService.insertTrail = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO rutas SET ?', [item]);
    return item;
});
TrailsService.updateTrail = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE rutas SET ? WHERE id_ruta = ?', [item, id]);
    return item;
});
