"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maintenances_1 = require("../controllers/maintenances");
const route = (0, express_1.Router)();
route.get('/', maintenances_1.MaintenancesController.getAll);
exports.default = route;
