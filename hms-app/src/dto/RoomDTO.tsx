import type {PatientHospitalizationDTO} from "./PatientHospitalizationDTO.tsx";
import type {DepartmentDTO} from "./DepartmentDTO.tsx";

export interface RoomDTO {
    roomId?: number;
    number?: string;
    floor?: number;
    bedNumber?: number;
    hospitalizations?: PatientHospitalizationDTO[];
    department?: Partial<DepartmentDTO>;
}

export const roomFieldLabels: { [key in keyof RoomDTO]: string } = {
    roomId: "ID sali",
    number: "Numer sali",
    floor: "Piętro",
    bedNumber: "Liczba łóżek"
};

export const formRoomField: (keyof RoomDTO)[] = [
    "number",
    "floor",
    "bedNumber",
];