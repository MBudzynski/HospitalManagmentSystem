export interface StaffSearchCriteria {
    name?: string;
    surname?: string;
    specialization?: string;
    peselNumber?: string;
    assignToDepartment?: boolean;
}

export const searchStaffFields: (keyof StaffSearchCriteria)[] = [
    "name",
    "surname",
    "peselNumber",
    "specialization",
];
export const searchStaffFieldLabels: { [key in keyof StaffSearchCriteria]: string } = {
    name: "Imię",
    surname: "Nazwisko",
    peselNumber: "PESEL",
    specialization: "Specjalizacja",
};
