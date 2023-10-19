"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRoutes = void 0;
const express_1 = require("express");
const validation_1 = __importDefault(require("../../middlewares/validation"));
const doctor_validation_1 = require("./doctor.validation");
const doctor_controller_1 = require("./doctor.controller");
const router = (0, express_1.Router)();
const { createDoctor, getDoctors, getDoctor } = doctor_controller_1.DoctorController;
router
    .post("/", (0, validation_1.default)(doctor_validation_1.ZCreateDoctor), createDoctor)
    .get("/", getDoctors)
    .get("/:id", getDoctor);
exports.DoctorRoutes = router;
