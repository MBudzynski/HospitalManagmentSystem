import type {RoomDTO} from "./RoomDTO.tsx";
import type {StaffDTO} from "./StaffDTO.tsx";

export interface DepartmentDTO {
    departmentId?: number;
    departmentName?: string;
    departmentCode?: number;
    headOfDepartment?: string;
    deputyHeadOfDepartment?: string;
    staffsPhoneNumber?: string;
    nursesPhoneNumber?: string;
    headPhoneNumber?: string;
    rooms: RoomDTO[];
    staffs: StaffDTO[];
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
    rooms: "Sale",
    staffs: "Personel",
};

export const dtoFields: (keyof DepartmentDTO)[] = ["departmentCode", "departmentName", "headOfDepartment"];