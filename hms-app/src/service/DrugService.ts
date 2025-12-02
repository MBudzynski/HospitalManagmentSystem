import axios from "axios";
import type {DrugDTO} from "../dto/DrugDTO.tsx";
import type {DrugSearchCriteria} from "../dto/search/DrugSearchCriteria.tsx";
import type {TimeOfDayDTO} from "../dto/TimeOfDayDTO.ts";
import type {DrugQuantityDTO} from "../dto/DrugQuantityDTO.tsx";

const API_URL = "http://localhost:8085/drug";

export interface DrugsResponse {
    drugs: DrugDTO[];
}

export const getAllDrugs = async (): Promise<DrugDTO[]> => {
    const res = await axios.get<DrugsResponse>(`${API_URL}`);
    return res.data.drugs;
};

export const searchDrug = async (field: keyof DrugSearchCriteria, value: string): Promise<DrugDTO[]> => {
    const params: DrugSearchCriteria = {};

    if (field && value) {
        params[field] = value;
    }
    console.log(params);
    const res = await axios.post<DrugsResponse>(`${API_URL}/search`, params);
    return res.data.drugs;
};

export const addDrug = async (drug: DrugDTO): Promise<DrugDTO> => {
    const res = await axios.post(`${API_URL}`, drug);
    return res.data;
};

export const deleteDrug = async (drugId: number): Promise<void> => {
    await axios.delete(`${API_URL}/${drugId}`);
};

export const getAllTimeOfDay = async (): Promise<TimeOfDayDTO[]> => {
    const res = await axios.get<TimeOfDayDTO[]>(`${API_URL}/time`);
    return res.data;
};

export const getAllDrugQuantity = async (): Promise<DrugQuantityDTO[]> => {
    const res = await axios.get<DrugQuantityDTO[]>(`${API_URL}/quantity`);
    return res.data;
};