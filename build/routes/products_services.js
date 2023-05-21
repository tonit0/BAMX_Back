"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_services_1 = require("../controllers/products_services");
const route = (0, express_1.Router)();
route.get('/', products_services_1.ProductsServicesController.getAll);
exports.default = route;
