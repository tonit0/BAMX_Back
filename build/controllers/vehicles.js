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
var path = require('path');
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
VehiclesController.insert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.files) {
            const file = req.files.image;
            const extFile = path.extname(file.name);
            const allowedExtension = ['.png', '.jpg', '.jpeg'];
            if (!allowedExtension.includes(extFile)) {
                res.status(415).send("IMAGEN INVÁLIDA");
            }
            else {
                let data = req.body;
                yield vehicles_1.VehiclesService.insertVehicle(req.body);
                const id = yield vehicles_1.VehiclesService.getLastId();
                data.url_foto = id + extFile;
                yield vehicles_1.VehiclesService.updateVehicle(data, id);
                file.mv(process.env.FILES_ROOT + "vehiculos/" + id + extFile);
                res.status(201).json({ message: "REGISTRADO CON ÉXITO" });
            }
        }
        else {
            res.status(204).json({ message: "IMAGEN ENVIADA" });
        }
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
        if (req.files) {
            const allowedExtension = ['.png', '.jpg', '.jpeg'];
            const file = req.files.image;
            const extFile = path.extname(file.name);
            if (!allowedExtension.includes(extFile)) {
                res.status(415).send("IMAGEN INVÁLIDA");
            }
            else {
                data.url_foto = id + extFile;
                yield vehicles_1.VehiclesService.updateVehicle(data, id);
                file.mv(process.env.FILES_ROOT + "vehiculos/" + id + extFile);
            }
        }
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
