interface ISignIn {
  email: string;
  password: string;
}

interface ISignInResponse {
  accessToken?: string;
  refreshToken?: string;
}

export { ISignIn, ISignInResponse };
