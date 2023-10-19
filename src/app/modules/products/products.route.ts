import { Router } from "express";
import validateRequest from "../../middlewares/validation";
import { ZCreateProduct } from "./products.validation";
import { ProductController } from "./products.controller";

const router = Router();

const { createProduct } = ProductController;

router.post("/", validateRequest(ZCreateProduct), createProduct);

export const ProductRoutes = router;
