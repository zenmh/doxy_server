import { z } from "zod";
import { Role } from "@prisma/client";

const ZCreateUser = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required !!" }),
    email: z.string({ required_error: "Email is required !!" }).email(),
    password: z.string({ required_error: "Password is required !!" }),
    role: z
      .enum([...Object.keys(Role)] as [string, ...string[]])
      .default(Role.PATIENT),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImage: z.string().optional(),
  }),
});

export { ZCreateUser };