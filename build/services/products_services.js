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
exports.ProductsServicesService = void 0;
const database_1 = require("../database");
class ProductsServicesService {
}
exports.ProductsServicesService = ProductsServicesService;
_a = ProductsServicesService;
ProductsServicesService.getProductsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM productos_servicios ORDER BY id_producto_servicio DESC');
    let products_services = rows.map((r) => {
        return r;
    });
    return products_services;
});
ProductsServicesService.getProductServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM productos_servicios WHERE id_producto_servicio = ?', [id]);
    let products_services = rows.map((r) => {
        return r;
    });
    return products_services;
});
ProductsServicesService.insertProductService = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO productos_servicios SET ?', [item]);
    return item;
});
ProductsServicesService.updateProductService = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE productos_servicios SET ? WHERE id_producto_servicio = ?', [item, id]);
    return item;
});
