export interface StaffDTO {
    staffId?: number;
    name?: string;
    surname?: string;
    peselNumber?: string;
    title?: string;
    specialization?: string;
    phoneNumber?: string;
    email?: string;
    professionalLicenseNumber?: string;
}

export const staffFieldLabels: { [key in keyof StaffDTO]: string } = {
    staffId: "ID pracownika",
    name: "Imię",
    surname: "Nazwisko",
    peselNumber: "PESEL",
    title: "Tytuł naukowy",
    specialization: "Specjalizacja",
    phoneNumber: "Telefon",
    email: "E-mail",
    professionalLicenseNumber: "Numer prawa wykonywania zawodu"
};

export const formStaffFields: (keyof StaffDTO)[] = [
    "name",
    "surname",
    "peselNumber",
    "title",
    "specialization",
    "phoneNumber",
    "email",
    "professionalLicenseNumber",
];

export const tableStaffFields: (keyof StaffDTO)[] = [
    "name",
    "surname",
    "peselNumber",
    "title",
    "specialization"
];
