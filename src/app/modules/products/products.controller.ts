import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductService } from "./products.service";
import sendResponse from "../../../shared/sendResponse";
import { Product } from "@prisma/client";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);

  sendResponse<Product>(res, {
    statusCode: 200,
    success: true,
    message: "Product created successfully !",
    data: result,
  });
});

export const ProductController = { createProduct };
