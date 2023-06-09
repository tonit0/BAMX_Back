"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const positions_1 = require("../controllers/positions");
const route = (0, express_1.Router)();
route.get('/', positions_1.PositionsController.getAll);
route.get('/:id', positions_1.PositionsController.getPositionById);
route.post('/', positions_1.PositionsController.insert);
route.put('/:id', positions_1.PositionsController.update);
exports.default = route;
