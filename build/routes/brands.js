"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brands_1 = require("../controllers/brands");
const route = (0, express_1.Router)();
route.get('/', brands_1.BrandsController.getAll);
route.get('/:id', brands_1.BrandsController.getBrandById);
route.post('/', brands_1.BrandsController.insert);
route.put('/:id', brands_1.BrandsController.update);
exports.default = route;
