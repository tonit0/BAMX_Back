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
exports.InputsOutputsController = void 0;
const inputs_outputs_1 = require("../services/inputs_outputs");
class InputsOutputsController {
}
exports.InputsOutputsController = InputsOutputsController;
_a = InputsOutputsController;
InputsOutputsController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield inputs_outputs_1.InputsOutputsService.getInputsOutputs();
        res.json(response);
    }
    catch (e) {
        res.json(e);
    }
});
InputsOutputsController.getInputOutputById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield inputs_outputs_1.InputsOutputsService.getInputOutputById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
InputsOutputsController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield inputs_outputs_1.InputsOutputsService.insertInputOutput(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
InputsOutputsController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield inputs_outputs_1.InputsOutputsService.updateInputOutput(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
