import { User } from "@prisma/client";

interface ISignIn {
  email: string;
  password: string;
}

interface ISignInResponse {
  accessToken?: string;
  refreshToken?: string;
}

type ISignUpResponse = {
  result: User;
} & ISignInResponse;

export { ISignIn, ISignInResponse, ISignUpResponse };
