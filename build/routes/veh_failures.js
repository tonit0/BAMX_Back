"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const veh_failures_1 = require("../controllers/veh_failures");
const route = (0, express_1.Router)();
route.get('/', veh_failures_1.VehFailuresController.getAll);
exports.default = route;
