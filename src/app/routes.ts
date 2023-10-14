import { Router } from "express";
import { UserRoutes } from "./modules/user/user.route";
import { AuthRoutes } from "./modules/auth/auth.route";

const router = Router();

[
  { path: "/users", route: UserRoutes },
  { path: "/auth", route: AuthRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
