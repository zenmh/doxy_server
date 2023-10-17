import { Doctor } from "@prisma/client";
import prisma from "../../../constants/prisma";
import { hashPassword } from "../../../helpers/bcrypt";

const createDoctor = async (data: Doctor): Promise<Doctor | undefined> => {
  let result;

  const password = await hashPassword(data.password);

  await prisma.$transaction(async (tx) => {
    await tx.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: password,
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

export const DoctorService = { createDoctor };
