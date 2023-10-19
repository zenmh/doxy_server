"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const validation_1 = __importDefault(require("../../middlewares/validation"));
const auth_validation_1 = require("./auth.validation");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
const { signUp, signIn } = auth_controller_1.AuthController;
router
    .post("/signup", (0, validation_1.default)(auth_validation_1.ZSignUp), signUp)
    .post("/signin", (0, validation_1.default)(auth_validation_1.ZSignIn), signIn);
exports.AuthRoutes = router;
