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
exports.VehiclesController = void 0;
const vehicles_1 = require("../services/vehicles");
class VehiclesController {
}
exports.VehiclesController = VehiclesController;
_a = VehiclesController;
VehiclesController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield vehicles_1.VehiclesService.getVehicles();
        res.json(response);
    }
    catch (e) {
        res.json(e);
    }
});
VehiclesController.getVehicleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield vehicles_1.VehiclesService.getVehicleById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiclesController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield vehicles_1.VehiclesService.insertVehicle(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiclesController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield vehicles_1.VehiclesService.updateVehicle(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
