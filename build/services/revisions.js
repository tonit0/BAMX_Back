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
exports.RevisionsService = void 0;
const database_1 = require("../database");
const vehicles_1 = require("./vehicles");
class RevisionsService {
}
exports.RevisionsService = RevisionsService;
_a = RevisionsService;
RevisionsService.getRevisions = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = [];
    let [rows] = yield database_1.connection.execute('SELECT * FROM revisiones_diarias ORDER BY id_revision DESC');
    let revisions = rows.map((r) => {
        return r;
    });
    for (let i = 0; i < revisions.length; i++) {
        const vehicle = yield vehicles_1.VehiclesService.getVehicleById(revisions[i].id_vehiculo.toString());
        delete revisions[i].id_vehiculo;
        revisions[i].vehiculo = vehicle[0];
        response.push(revisions[i]);
    }
    return response;
});
RevisionsService.getRevisionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = [];
    let [rows] = yield database_1.connection.execute('SELECT * FROM revisiones_diarias WHERE id_revision = ?', [id]);
    let revisions = rows.map((r) => {
        return r;
    });
    for (let i = 0; i < revisions.length; i++) {
        const vehicle = yield vehicles_1.VehiclesService.getVehicleById(revisions[i].id_vehiculo.toString());
        delete revisions[i].id_vehiculo;
        revisions[i].vehiculo = vehicle[0];
        response.push(revisions[i]);
    }
    return response;
});
RevisionsService.insertRevision = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO revisiones_diarias SET ?', [item]);
    return item;
});
RevisionsService.updateRevision = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE revisiones_diarias SET ? WHERE id_revision = ?', [item, id]);
    return item;
});
