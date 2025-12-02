import axios from "axios";
import type {MedicalHistoryDTO} from "../dto/MedicalHistoryDTO.tsx";

const API_URL = "http://localhost:8085/hospitalization/medical-history";

export interface PatientHospitalizationsResponse {
    medicalHistory: MedicalHistoryDTO[];
}

export const addMedicalHistory = async (hospitalizationId: number, medicalHistory: MedicalHistoryDTO): Promise<void> => {
    await axios.post(`${API_URL}/${hospitalizationId}`, medicalHistory);
};
