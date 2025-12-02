import axios from "axios";
import type {HospitalizationDrugDTO} from "../dto/HospitalizationDrugDTO.tsx";

const API_URL = "http://localhost:8085/hospitalizations/drug";

export const addDrugHospitalization = async (hospitalizationId: number, drugHospitalization: HospitalizationDrugDTO): Promise<void> => {
    await axios.post(`${API_URL}/${hospitalizationId}`, drugHospitalization);
};