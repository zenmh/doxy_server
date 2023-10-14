import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully !",
    data: result,
  });
});

export const UserController = { createUser };
