export interface DepartmentDTO {
    departmentId: number;
    departmentName: string;
    departmentCode: number;
    headOfDepartment: string;
    deputyHeadOfDepartment: string;
    staffsPhoneNumber: string;
    nursesPhoneNumber: string;
    headPhoneNumber: string;
}

export const departmentFieldLabels: { [key in keyof DepartmentDTO]: string } = {
    departmentId: "ID działu",
    departmentName: "Nazwa działu",
    departmentCode: "Kod działu",
    headOfDepartment: "Kierownik działu",
    deputyHeadOfDepartment: "Zastępca kierownika",
    staffsPhoneNumber: "Telefon personelu",
    nursesPhoneNumber: "Telefon pielęgniarek",
    headPhoneNumber: "Telefon kierownika",
};