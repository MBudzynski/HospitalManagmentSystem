
export interface PatientSearchCriteria {
    name?: string;
    surname?: string;
    pesel?: string;
    birthDate?: string;
    email?: string;
    phone?: string;
}

export const searchPatientFields: (keyof PatientSearchCriteria)[] = [
    "name",
    "surname",
    "pesel",
    "birthDate",
    "email",
    "phone",
];
export const searchPatientFieldLabels: { [key in keyof PatientSearchCriteria]: string } = {
    name: "Imię",
    surname: "Nazwisko",
    pesel: "PESEL",
    birthDate: "Data urodzenia",
    email: "e-mail",
    phone: "Numer telefonu",
};
