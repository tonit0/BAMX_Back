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
exports.BrandsService = void 0;
const database_1 = require("../database");
class BrandsService {
}
exports.BrandsService = BrandsService;
_a = BrandsService;
BrandsService.getBrands = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM marcas_vehiculos ORDER BY id_marca DESC');
    let brands = rows.map((r) => {
        return r;
    });
    return brands;
});
BrandsService.getBrandById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM marcas_vehiculos WHERE id_marca = ?', [id]);
    let brands = rows.map((r) => {
        return r;
    });
    return brands;
});
BrandsService.insertBrand = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO marcas_vehiculos SET ?', [item]);
    return item;
});
BrandsService.updateBrand = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE marcas_vehiculos SET ? WHERE id_marca = ?', [item, id]);
    return item;
});
