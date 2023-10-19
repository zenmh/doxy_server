import { Doctor, Prisma } from "@prisma/client";
import prisma from "../../../constants/prisma";
import { hashPassword } from "../../../helpers/bcrypt";
import { IGenericResponse } from "../../../interfaces/common";
import { IDoctorFilterRequest, IDoctorResponse } from "./doctor.interface";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { calculatePagination } from "../../../helpers/pagination";
import {
  doctorSearchableFields,
  doctor_response_fields,
} from "./doctor.constant";
import ApiError from "../../../errors/ApiError";

const createDoctor = async (data: Doctor): Promise<Doctor | undefined> => {
  let result;

  data.password = await hashPassword(data.password);

  await prisma.$transaction(async (tx) => {
    await tx.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "DOCTOR",
        contactNo: data?.contactNo,
        address: data?.address,
        profileImage: data?.profileImage,
      },
    });

    result = await tx.doctor.create({ data });
  });

  return result;
};

const getDoctors = async (
  { searchTerm, ...filterData }: IDoctorFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<IDoctorResponse[]>> => {
  const { page, limit, skip } = calculatePagination(options);

  const pipeline = [];

  if (searchTerm) {
    pipeline.push({
      OR: doctorSearchableFields.map((field) => ({
        [field]: { contains: searchTerm, mode: "insensitive" },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    pipeline.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: { equals: (filterData as any)[key] },
      })),
    });
  }

  const where: Prisma.DoctorWhereInput =
    pipeline.length > 0 ? { AND: pipeline } : {};

  const result = await prisma.doctor.findMany({
    where,
    skip,
    take: limit,
    select: doctor_response_fields,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
  });

  const total = await prisma.doctor.count({ where });
  // @ts-ignore
  return { meta: { page, limit, total }, data: result };
};

const getDoctor = async (id: string): Promise<IDoctorResponse> => {
  const doctor = await prisma.doctor.findFirst({
    where: { id },
    select: doctor_response_fields,
  });

  if (!doctor) throw new ApiError(404, "Doctor not found !!");
  // @ts-ignore
  else return doctor;
};

export const DoctorService = { createDoctor, getDoctors, getDoctor };
