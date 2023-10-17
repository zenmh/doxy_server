import { Router } from "express";
import validateRequest from "../../middlewares/validation";
import { ZCreateDoctor } from "./doctor.validation";
import { DoctorController } from "./doctor.controller";

const router = Router();
const { createDoctor } = DoctorController;

router.post("/", validateRequest(ZCreateDoctor), createDoctor);

export const DoctorRoutes = router;
