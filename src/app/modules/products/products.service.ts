import { Product } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";

const createProduct = async (data: Product): Promise<Product> => {
  const isExist = await prisma.product.findFirst({
    where: { name: data.name, company: data.company, category: data.category },
  });

  if (isExist) throw new ApiError(409, "The product is already exist !!");

  const result = await prisma.product.create({ data });

  return result;
};

export const ProductService = { createProduct };
