import { ProductCategory } from "@prisma/client";
import { z } from "zod";

const ZCreateProduct = z.object({
  body: z.object({
    image: z.string({ required_error: "Image is required !!" }),
    name: z.string({ required_error: "Product name is required !!" }),
    company: z.string({ required_error: "Company is required !!" }),
    price: z.number({ required_error: "Product price is required !!" }),
    category: z.enum(
      [...Object.keys(ProductCategory)] as [string, ...string[]],
      { required_error: "Product category is required !!" }
    ),
  }),
});

export { ZCreateProduct };
