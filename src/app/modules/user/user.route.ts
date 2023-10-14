import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validation";
import { ZCreateUser } from "./user.validation";

const router = Router();
const { createUser } = UserController;

// Create
router.post("/", validateRequest(ZCreateUser), createUser);

export const UserRoutes = router;
