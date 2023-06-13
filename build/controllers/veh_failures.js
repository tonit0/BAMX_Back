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
exports.VehFailuresController = void 0;
const veh_failures_1 = require("../services/veh_failures");
class VehFailuresController {
}
exports.VehFailuresController = VehFailuresController;
_a = VehFailuresController;
VehFailuresController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield veh_failures_1.VehFailuresService.getVehFailures();
        res.json(response);
    }
    catch (e) {
        res.json(e);
    }
});
VehFailuresController.getVehFailureById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield veh_failures_1.VehFailuresService.getVehFailureById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

VehFailuresController.getVehFailureById_Concluded  = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield veh_failures_1.VehFailuresService.getVehFailureById_Concluded (id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

VehFailuresController.getVehFailureById_Unfinished  = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield veh_failures_1.VehFailuresService.getVehFailureById_Unfinished (id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

VehFailuresController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield veh_failures_1.VehFailuresService.insertVehFailure(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehFailuresController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield veh_failures_1.VehFailuresService.updateVehFailure(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
