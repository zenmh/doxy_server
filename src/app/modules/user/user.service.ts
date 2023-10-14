import prisma from "../../../constants/prisma";
import { User } from "@prisma/client";
import { hashPassword } from "../../../helpers/bcrypt";

const createUser = async (data: User): Promise<User> => {
  data.password = await hashPassword(data.password);

  const result = await prisma.user.create({ data });

  return result;
};

export const UserService = { createUser };
