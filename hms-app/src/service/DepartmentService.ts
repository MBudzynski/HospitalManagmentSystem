import axios from "axios";
import type {DepartmentDTO} from "../dto/DepartmentDTO";

const API_URL = "http://localhost:8085/department";

export interface DepartmentsResponse {
    departments: DepartmentDTO[];
}

export const getDepartments = async (): Promise<DepartmentDTO[]> => {
    const response = await axios.get<DepartmentsResponse>(API_URL);
    return response.data.departments;
};

export const getDepartmentById = async (id?: number): Promise<DepartmentDTO | null> => {
    if (!id) {
        console.warn("Brak departmentId — przerwano pobieranie.");
        return null;
    }

    const response = await axios.get<DepartmentDTO>(`${API_URL}/${id}`);
    return response.data;
};