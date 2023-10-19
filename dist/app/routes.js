"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const auth_route_1 = require("./modules/auth/auth.route");
const doctor_route_1 = require("./modules/doctor/doctor.route");
const treatment_route_1 = require("./modules/treatment/treatment.route");
const products_route_1 = require("./modules/products/products.route");
const router = (0, express_1.Router)();
[
    { path: "/auth", route: auth_route_1.AuthRoutes },
    { path: "/doctors", route: doctor_route_1.DoctorRoutes },
    { path: "/treatments", route: treatment_route_1.TreatmentRoutes },
    { path: "/products", route: products_route_1.ProductRoutes },
].forEach(({ path, route }) => router.use(path, route));
exports.routes = router;
