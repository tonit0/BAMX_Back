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
exports.PositionsController = void 0;
const positions_1 = require("../services/positions");
class PositionsController {
}
exports.PositionsController = PositionsController;
_a = PositionsController;
PositionsController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield positions_1.PositionsService.getPositions();
        res.json(response);
    }
    catch (e) {
        res.json(e);
    }
});
PositionsController.getPositionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield positions_1.PositionsService.getPositionById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
PositionsController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield positions_1.PositionsService.insertPosition(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
PositionsController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield positions_1.PositionsService.updatePosition(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
