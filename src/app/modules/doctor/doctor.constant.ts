const doctorFilterableFields: string[] = [
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

const doctorSearchableFields: string[] = [
  "name",
  "email",
  "contactNo",
  "speciality",
];

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

export {
  doctorFilterableFields,
  doctorSearchableFields,
  doctor_response_fields,
};
