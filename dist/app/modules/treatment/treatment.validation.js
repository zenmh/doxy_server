"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZCreateTreatment = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const ZCreateTreatment = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...Object.keys(client_1.Speciality)], {
            required_error: "Treatment name is required !!",
        }),
    }),
});
exports.ZCreateTreatment = ZCreateTreatment;
