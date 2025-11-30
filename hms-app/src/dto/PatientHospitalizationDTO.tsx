import type { PatientDTO } from "./PatientDTO";

export interface PatientHospitalizationDTO {
    patientHospitalizationId?: number;
    dateFrom?: string;
    dateTo?: string;
    patient?: PatientDTO;
}

export const patientHospitalizationFieldLabels: {
    [key in keyof PatientHospitalizationDTO]: string
} = {
    patientHospitalizationId: "ID hospitalizacji",
    dateFrom: "Data od",
    dateTo: "Data do",
    patient: "Pacjent"
};

export const hospitalizationListFields: (keyof PatientHospitalizationDTO)[] = [
    "dateFrom",
    "dateTo",
    "patient"
];
