import { Router } from "express";
import validateRequest from "../../middlewares/validation";
import { ZSignIn } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = Router();
const { signIn } = AuthController;

router.post("/signin", validateRequest(ZSignIn), signIn);

export const AuthRoutes = router;
