import { Treatment } from "@prisma/client";
import prisma from "../../../constants/prisma";
import { slots } from "./treatment.constant";
import ApiError from "../../../errors/ApiError";

const createTreatment = async (data: Treatment): Promise<Treatment> => {
  const isExist = await prisma.treatment.findFirst({
    where: { name: data.name },
  });

  if (isExist) throw new ApiError(409, "The treatment is already exist !!");

  data.slots = slots;

  const result = await prisma.treatment.create({ data });

  return result;
};

export const TreatmentService = { createTreatment };
