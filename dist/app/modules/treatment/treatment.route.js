"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentRoutes = void 0;
const express_1 = require("express");
const treatment_controller_1 = require("./treatment.controller");
const validation_1 = __importDefault(require("../../middlewares/validation"));
const treatment_validation_1 = require("./treatment.validation");
const router = (0, express_1.Router)();
const { createTreatment } = treatment_controller_1.TreatmentController;
router.post("/", (0, validation_1.default)(treatment_validation_1.ZCreateTreatment), createTreatment);
exports.TreatmentRoutes = router;
