import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthService } from "./auth.service";
import config from "../../../config";
import sendResponse from "../../../shared/sendResponse";

const signIn = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await AuthService.signIn(req.body);

  res.cookie("refreshToken", refreshToken, {
    secure: config.env === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully !",
    data: { accessToken },
  });
});

export const AuthController = { signIn };
