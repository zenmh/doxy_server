import dotenv from "dotenv";

dotenv.config();

const pnv = process.env;

export default {
  env: pnv.NODE_ENV,
  port: pnv.PORT,
  jwt: {
    access_secret: pnv.JWT_ACCESS_SECRET,
    access_expires_in: pnv.JWT_ACCESS_EXPIRES_IN,
    refresh_secret: pnv.JWT_REFRESH_SECRET,
    refresh_expires_in: pnv.JWT_REFRESH_EXPIRES_IN,
  },
  bcrypt_salt_roundes: pnv.BCRYPT_SALT_ROUNDS,
};
