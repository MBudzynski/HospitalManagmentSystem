import axios from "axios";
import {type PatientHospitalizationDTO} from "../dto/PatientHospitalizationDTO";

const API_URL = "http://localhost:8085/hospitalizations";

export interface PatientHospitalizationsResponse {
    hospitalizations: PatientHospitalizationDTO[];
}

export const getHospitalizationsByDepartment = async (departmentId: number): Promise<PatientHospitalizationDTO[]> => {
    const response = await axios.get<PatientHospitalizationsResponse>(`${API_URL}/department/${departmentId}`);
    return response.data.hospitalizations;
};

export const getHospitalizationsById = async (hospitalizationId: number): Promise<PatientHospitalizationDTO> => {
    const response = await axios.get<PatientHospitalizationDTO>(`${API_URL}/${hospitalizationId}`);
    return response.data;
};

export const finishHospitalization = async (hospitalizationId: number):Promise<void> => {
    await axios.put(`${API_URL}/finish/${hospitalizationId}`);
}