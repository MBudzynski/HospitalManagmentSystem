import type {PatientDTO} from "../dto/PatientDTO.tsx";
import axios from "axios";
import type {PatientSearchCriteria} from "../dto/search/PatientSearchCriteria.tsx";

const API_URL = "http://localhost:8085/patient";

export interface PatientSearchResponse {
    patients: PatientDTO[];
}

export const savePatient = async (patient: PatientDTO): Promise<PatientDTO> => {
    const response = await axios.post<PatientDTO>(`${API_URL}`, patient);
    return response.data;
};

export const deletePatient = async (patientId: number): Promise<void> => {
    await axios.delete(`${API_URL}/${patientId}`);
};

export const searchPatient = async (field?: keyof PatientSearchCriteria, value?: string): Promise<PatientDTO[]> => {

    const criteria: PatientSearchCriteria = {};

    if (field && value) {
        criteria[field] = value;
    }

    const response =  await axios.post<PatientSearchResponse>(`${API_URL}/search`, criteria);
    return response.data.patients;
};

export const getAllPatients = async (): Promise<PatientDTO[]> => {
    const response =  await axios.get<PatientSearchResponse>(`${API_URL}`);
    return response.data.patients;
};