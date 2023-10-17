import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { DoctorService } from "./doctor.service";
import sendResponse from "../../../shared/sendResponse";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.createDoctor(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor created successfully !",
    data: result,
  });
});

export const DoctorController = { createDoctor };
