type IDoctorFilterRequest = {
  searchTerm?: string;
  name?: string;
  email?: string;
  contactNo?: string;
  address?: string;
  speciality?: string;
  experiences?: string;
  practicing_branch?: string;
  branch?: string;
};

type IDoctorResponse = {
  id: string;
  name: string;
  email: string;
  role: "PATIENT" | "DOCTOR" | "ADMIN" | "SUPER_ADMIN";
  contactNo: string;
  address: string;
  profileImage: string;
  speciality:
    | "THYROID"
    | "EYE"
    | "NEUROLOGY"
    | "CARDIOLOGY"
    | "MEDICINE"
    | "PSYCHIATRY"
    | "DENTIST"
    | "ORTHOPEDICS"
    | "HAEMATOLOGY"
    | "GYNAECOLOGY";
  experiences: string;
  practicing_branch: string;
  branch:
    | "BARISHAL"
    | "CHATTOGRAM"
    | "DHAKA"
    | "KHULNA"
    | "RAJSHAHI"
    | "RANGPUR"
    | "MYMENSINGH"
    | "SYLHET";
  treatmentId: string;
  createdAt: string;
  updatedAt: string;
};

export { IDoctorFilterRequest, IDoctorResponse };
