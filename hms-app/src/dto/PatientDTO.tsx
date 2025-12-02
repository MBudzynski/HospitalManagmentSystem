export interface PatientDTO {
    patientId?: number;
    name?: string;
    surname?: string;
    pesel?: string;
    birthDate?: string;
    gender?: string;
    phone?: string;
    email?: string;
    street?: string;
    city?: string;
    houseNumber?: string;
    postalCode?: string;
}

export const patientFieldLabels: { [key in keyof PatientDTO]: string } = {
    patientId: "ID pacjenta",
    name: "Imię",
    surname: "Nazwisko",
    pesel: "Pesel",
    birthDate: "Data urodzenia",
    gender: "Płeć",
    phone: "Telefon",
    email: "Email",
    street: "Ulica",
    city: "Miasto",
    houseNumber: "Numer domu",
    postalCode: "Kod pocztowy",
};

export const dtoFields: (keyof PatientDTO)[] = ["name",
    "surname",
    "birthDate",
    "pesel",
    "phone"];