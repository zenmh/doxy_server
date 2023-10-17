import { Router } from "express";
import { TreatmentController } from "./treatment.controller";
import validateRequest from "../../middlewares/validation";
import { ZCreateTreatment } from "./treatment.validation";

const router = Router();
const { createTreatment } = TreatmentController;

router.post("/", validateRequest(ZCreateTreatment), createTreatment);

export const TreatmentRoutes = router;
