import { Router } from "express";
import validateRequest from "../../middlewares/validation";
import { ZCreateDoctor } from "./doctor.validation";
import { DoctorController } from "./doctor.controller";

const router = Router();
const { createDoctor, getDoctors, getDoctor } = DoctorController;

router
  .post("/", validateRequest(ZCreateDoctor), createDoctor)
  .get("/", getDoctors)
  .get("/:id", getDoctor);

export const DoctorRoutes = router;
