"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZCreateDoctor = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const ZCreateDoctor = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required !!" }),
        email: zod_1.z.string({ required_error: "Email is required !!" }).email(),
        password: zod_1.z.string({ required_error: "Password is reqired !!" }),
        role: zod_1.z
            .enum([...Object.keys(client_1.Role)])
            .default(client_1.Role.DOCTOR),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().optional(),
        speciality: zod_1.z.enum([...Object.keys(client_1.Speciality)], {
            required_error: "Speciality is required !!",
        }),
        experiences: zod_1.z.string({ required_error: "Experience is required !!" }),
        practicing_branch: zod_1.z.string({
            required_error: "Practicing branch is required !!",
        }),
        branch: zod_1.z
            .enum([...Object.keys(client_1.Branch)])
            .default(client_1.Branch.DHAKA),
        treatmentId: zod_1.z.string({ required_error: "Treatment Id is required !!" }),
    }),
});
exports.ZCreateDoctor = ZCreateDoctor;
