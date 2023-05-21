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
exports.PositionsService = void 0;
const database_1 = require("../database");
class PositionsService {
}
exports.PositionsService = PositionsService;
_a = PositionsService;
PositionsService.getPositions = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM puestos ORDER BY id_puesto DESC');
    let positions = rows.map((r) => {
        return r;
    });
    return positions;
});
PositionsService.getPositionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM puestos WHERE id_puesto = ?', [id]);
    let positions = rows.map((r) => {
        return r;
    });
    return positions;
});
PositionsService.insertPosition = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO puestos SET ?', [item]);
    return item;
});
PositionsService.updatePosition = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE puestos SET ? WHERE id_puesto = ?', [item, id]);
    return item;
});
