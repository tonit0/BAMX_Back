"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inputs_outputs_1 = require("../controllers/inputs_outputs");
const route = (0, express_1.Router)();
route.get('/', inputs_outputs_1.InputsOutputsController.getAll);
exports.default = route;
