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
exports.InputsOutputsService = void 0;
const database_1 = require("../database");
class InputsOutputsService {
}
exports.InputsOutputsService = InputsOutputsService;
_a = InputsOutputsService;
InputsOutputsService.getInputsOutputs = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM entradas_salidas ORDER BY id_entrada_salida DESC');
    let inputs_outputs = rows.map((r) => {
        return r;
    });
    return inputs_outputs;
});
InputsOutputsService.getInputOutputById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM entradas_salidas WHERE id_entrada_salida = ?', [id]);
    let inputs_outputs = rows.map((r) => {
        return r;
    });
    return inputs_outputs;
});
InputsOutputsService.insertInputOutput = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO entradas_salidas SET ?', [item]);
    return item;
});
InputsOutputsService.updateInputOutput = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE entradas_salidas SET ? WHERE id_entrada_salida = ?', [item, id]);
    return item;
});
