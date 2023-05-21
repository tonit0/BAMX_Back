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
exports.ProvidersService = void 0;
const database_1 = require("../database");
class ProvidersService {
}
exports.ProvidersService = ProvidersService;
_a = ProvidersService;
ProvidersService.getProviders = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM proveedores ORDER BY id_proveedor DESC');
    let providers = rows.map((r) => {
        return r;
    });
    return providers;
});
ProvidersService.getProviderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM proveedores WHERE id_proveedor = ?', [id]);
    let providers = rows.map((r) => {
        return r;
    });
    return providers;
});
ProvidersService.insertProvider = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO proveedores SET ?', [item]);
    return item;
});
ProvidersService.updateProvider = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE proveedores SET ? WHERE id_proveedor = ?', [item, id]);
    return item;
});
