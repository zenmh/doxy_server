"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../../constants/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwt_1 = require("../../../helpers/jwt");
const config_1 = __importDefault(require("../../../config"));
const bcrypt_1 = require("../../../helpers/bcrypt");
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.password = yield (0, bcrypt_1.hashPassword)(data.password);
    const result = yield prisma_1.default.user.create({ data });
    const { id: userId, role } = result;
    const accessToken = (0, jwt_1.createToken)({ userId, role }, config_1.default.jwt.access_secret, config_1.default.jwt.access_expires_in);
    const refreshToken = (0, jwt_1.createToken)({ userId, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return { accessToken, refreshToken, result };
});
const signIn = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    let accessToken;
    let refreshToken;
    yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const isUserExist = yield tx.user.findFirst({
            where: { email },
        });
        if (!isUserExist)
            throw new ApiError_1.default(404, "User not found !!");
        const isPasswordMatch = yield (0, bcrypt_1.matchPassword)(password, isUserExist.password);
        if (isPasswordMatch && isUserExist) {
            const { id: userId, role } = isUserExist;
            accessToken = (0, jwt_1.createToken)({ userId, role }, config_1.default.jwt.access_secret, config_1.default.jwt.access_expires_in);
            refreshToken = (0, jwt_1.createToken)({ userId, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
        }
    }));
    return { accessToken, refreshToken };
});
exports.AuthService = { signUp, signIn };
