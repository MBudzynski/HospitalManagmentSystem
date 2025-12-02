import type { PatientDTO } from "./PatientDTO";
import type {RoomDTO} from "./RoomDTO.tsx";
import type {HospitalizationDrugDTO} from "./HospitalizationDrugDTO.tsx";
import type {MedicalHistoryDTO} from "./MedicalHistoryDTO.tsx";
import type {HospitalizationDocumentDTO} from "./HospitalizationDocumentDTO.tsx";

export interface PatientHospitalizationDTO {
    patientHospitalizationId?: number;
    dateFrom?: string;
    dateTo?: string;
    patient?: PatientDTO;
    room?: RoomDTO;
    hospitalizationDrugs?: HospitalizationDrugDTO[];
    medicalHistories?: MedicalHistoryDTO[];
    hospitalizationDocuments?: HospitalizationDocumentDTO[];
}

export const patientHospitalizationFieldLabels: {
    [key in keyof PatientHospitalizationDTO]: string
} = {
    patientHospitalizationId: "ID hospitalizacji",
    dateFrom: "Data od",
    dateTo: "Data do",
    patient: "Pacjent",
    room: "Sala",
    hospitalizationDrugs: "Leki",
    medicalHistories: "Leczenie",
    hospitalizationDocuments: "Dokumentacja medyczna"
};

export const hospitalizationListFields: (keyof PatientHospitalizationDTO)[] = [
    "dateFrom",
    "dateTo",
    "patient"
];
