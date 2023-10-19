"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZCreateProduct = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const ZCreateProduct = zod_1.z.object({
    body: zod_1.z.object({
        image: zod_1.z.string({ required_error: "Image is required !!" }),
        name: zod_1.z.string({ required_error: "Product name is required !!" }),
        company: zod_1.z.string({ required_error: "Company is required !!" }),
        price: zod_1.z.number({ required_error: "Product price is required !!" }),
        category: zod_1.z.enum([...Object.keys(client_1.ProductCategory)], { required_error: "Product category is required !!" }),
    }),
});
exports.ZCreateProduct = ZCreateProduct;
