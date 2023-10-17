import { Router } from "express";
import validateRequest from "../../middlewares/validation";
import { ZSignIn, ZSignUp } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = Router();
const { signUp, signIn } = AuthController;

router
  .post("/signup", validateRequest(ZSignUp), signUp)
  .post("/signin", validateRequest(ZSignIn), signIn);

export const AuthRoutes = router;
