import { Specialitiy } from "@prisma/client";
import { z } from "zod";

const ZCreateTreatment = z.object({
  body: z.object({
    name: z.enum([...Object.keys(Specialitiy)] as [string, ...string[]], {
      required_error: "Treatment name is required !!",
    }),
  }),
});

export { ZCreateTreatment };
