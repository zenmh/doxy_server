"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZSignIn = exports.ZSignUp = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const ZSignUp = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required !!" }),
        email: zod_1.z.string({ required_error: "Email is required !!" }).email(),
        password: zod_1.z.string({ required_error: "Password is required !!" }),
        role: zod_1.z
            .enum([...Object.keys(client_1.Role)])
            .default(client_1.Role.PATIENT),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().optional(),
    }),
});
exports.ZSignUp = ZSignUp;
const ZSignIn = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "Email is required !!" }).email(),
        password: zod_1.z.string({ required_error: "Password is required !!" }),
    }),
});
exports.ZSignIn = ZSignIn;
