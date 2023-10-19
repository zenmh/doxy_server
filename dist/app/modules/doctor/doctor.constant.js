"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctor_response_fields = exports.doctorSearchableFields = exports.doctorFilterableFields = void 0;
const doctorFilterableFields = [
    "searchTerm",
    "name",
    "email",
    "contactNo",
    "address",
    "speciality",
    "experiences",
    "practicing_branch",
    "branch",
];
exports.doctorFilterableFields = doctorFilterableFields;
const doctorSearchableFields = [
    "name",
    "email",
    "contactNo",
    "speciality",
];
exports.doctorSearchableFields = doctorSearchableFields;
const doctor_response_fields = {
    id: true,
    name: true,
    email: true,
    password: false,
    role: true,
    contactNo: true,
    profileImage: true,
    address: true,
    branch: true,
    experiences: true,
    practicing_branch: true,
    speciality: true,
    treatmentId: true,
    createdAt: true,
    updatedAt: true,
};
exports.doctor_response_fields = doctor_response_fields;
