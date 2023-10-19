import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { DoctorService } from "./doctor.service";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import { doctorFilterableFields } from "./doctor.constant";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.createDoctor(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor created successfully !",
    data: result,
  });
});

const getDoctors = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, doctorFilterableFields);
  const options = pick(req.query, paginationFields);

  const { meta, data } = await DoctorService.getDoctors(filters, options);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctors retrieved successfully !",
    meta,
    data,
  });
});

const getDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getDoctor(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor retrieved successfully !",
    data: result,
  });
});

export const DoctorController = { createDoctor, getDoctors, getDoctor };
