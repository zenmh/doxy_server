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
exports.TreatmentService = void 0;
const prisma_1 = __importDefault(require("../../../constants/prisma"));
const treatment_constant_1 = require("./treatment.constant");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createTreatment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.treatment.findFirst({
        where: { name: data.name },
    });
    if (isExist)
        throw new ApiError_1.default(409, "The treatment is already exist !!");
    data.slots = treatment_constant_1.slots;
    const result = yield prisma_1.default.treatment.create({ data });
    return result;
});
exports.TreatmentService = { createTreatment };
