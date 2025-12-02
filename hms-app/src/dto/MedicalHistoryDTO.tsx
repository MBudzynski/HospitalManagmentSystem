import type {StaffDTO} from "./StaffDTO";
import type {DocumentDTO} from "./DocumentDTO";

export interface MedicalHistoryDTO {
    medicalHistoryId?: number;
    staff?: StaffDTO;
    creationDate?: string;
    description?: string;
    documents?: DocumentDTO[];
}

export const medicalHistoryFieldLabels: { [key in keyof MedicalHistoryDTO]: string } = {
    medicalHistoryId: "Id historii medycznej",
    staff: "Personel",
    creationDate: "Data utworzenia",
    description: "Opis",
    documents: "Dokumenty",
};

export const medicalHistoryFields: (keyof MedicalHistoryDTO)[] = [
    "staff",
    "creationDate",
    "description",
    "documents",
];
