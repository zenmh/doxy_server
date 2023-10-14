import prisma from "../../../constants/prisma";
import { ISignIn, ISignInResponse } from "./auth.interface";
import ApiError from "../../../errors/ApiError";
import { createToken } from "../../../helpers/jwt";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { matchPassword } from "../../../helpers/bcrypt";

const signIn = async ({
  email,
  password,
}: ISignIn): Promise<ISignInResponse> => {
  let accessToken;
  let refreshToken;

  await prisma.$transaction(async (tx) => {
    const isUserExist = await tx.user.findFirst({
      where: { email },
    });

    if (!isUserExist) throw new ApiError(404, "User not found !!");

    const isPasswordMatch = await matchPassword(password, isUserExist.password);

    if (isPasswordMatch && isUserExist) {
      const { id: userId, role } = isUserExist;

      accessToken = createToken(
        { userId, role },
        config.jwt.access_secret as Secret,
        config.jwt.access_expires_in as string
      );

      refreshToken = createToken(
        { userId, role },
        config.jwt.refresh_secret as Secret,
        config.jwt.refresh_expires_in as string
      );
    }
  });

  return { accessToken, refreshToken };
};

export const AuthService = { signIn };
