"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./app/routes");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Application Routes
app.use("/api/v1", routes_1.routes);
// Global Error Handler
app.use(globalErrorHandler_1.default);
// Test Route
app.use((req, res) => {
    res.json("Doxy On Fire 🔥 💧 🔥");
});
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found !!",
        errorMessages: [{ path: req.originalUrl, message: "Api Not Found !!" }],
    });
    next();
});
exports.default = app;
