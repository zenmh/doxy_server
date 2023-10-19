import { Branch, Role, Speciality } from "@prisma/client";
import { z } from "zod";

const ZCreateDoctor = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required !!" }),
    email: z.string({ required_error: "Email is required !!" }).email(),
    password: z.string({ required_error: "Password is reqired !!" }),
    role: z
      .enum([...Object.keys(Role)] as [string, ...string[]])
      .default(Role.DOCTOR),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImage: z.string().optional(),
    speciality: z.enum([...Object.keys(Speciality)] as [string, ...string[]], {
      required_error: "Speciality is required !!",
    }),
    experiences: z.string({ required_error: "Experience is required !!" }),
    practicing_branch: z.string({
      required_error: "Practicing branch is required !!",
    }),
    branch: z
      .enum([...Object.keys(Branch)] as [string, ...string[]])
      .default(Branch.DHAKA),
    treatmentId: z.string({ required_error: "Treatment Id is required !!" }),
  }),
});

export { ZCreateDoctor };
