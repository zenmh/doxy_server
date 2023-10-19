"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const validation_1 = __importDefault(require("../../middlewares/validation"));
const products_validation_1 = require("./products.validation");
const products_controller_1 = require("./products.controller");
const router = (0, express_1.Router)();
const { createProduct } = products_controller_1.ProductController;
router.post("/", (0, validation_1.default)(products_validation_1.ZCreateProduct), createProduct);
exports.ProductRoutes = router;
