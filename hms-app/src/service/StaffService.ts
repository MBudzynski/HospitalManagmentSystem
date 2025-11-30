import type { StaffDTO } from "../dto/StaffDTO";
import axios from "axios";
import type {StaffSearchCriteria} from "../dto/search/StaffSerachCriteria.tsx";

const API_URL = "http://localhost:8085/staff";

export interface StaffSearchResponse {
    staffs: StaffDTO[];
}

export interface StaffDepartmentRequest {
    staffId: number;
    departmentId?: number;
}

export const searchUnassignStaff = async (field?: keyof StaffSearchCriteria, value?: string): Promise<StaffDTO[]> => {

    const criteria: StaffSearchCriteria = {
        assignToDepartment: false
    };

    if (field && value) {
        if (field !== "assignToDepartment") {
            criteria[field] = value;
        }
    }

    const response = await axios.post<StaffSearchResponse>(API_URL + "/search", criteria);
    return response.data.staffs;
};

export const searchStaff = async (field?: keyof StaffSearchCriteria, value?: string): Promise<StaffDTO[]> => {

    const criteria: StaffSearchCriteria = {
    };

    if (field && value) {
        if (field !== "assignToDepartment") {
            criteria[field] = value;
        }
    }

    const response = await axios.post<StaffSearchResponse>(API_URL + "/search", criteria);
    return response.data.staffs;
};

export const assignStaffToDepartment = async (
    staffId: number,
    departmentId: number
): Promise<void> => {
    const body: StaffDepartmentRequest = { staffId, departmentId };
    await axios.post(`${API_URL}/department/assign`, body);
};

export const removeStaffFromDepartment = async (
    staffId: number
): Promise<void> => {
    const body: StaffDepartmentRequest = { staffId };
    await axios.post(`${API_URL}/department/remove`, body);
};

export const getAllStaffs = async () => {
    const response = await axios.get<StaffSearchResponse>(`${API_URL}`);
    return response.data.staffs;
};

export const addStaff = async (staff: StaffDTO) => {
    return await axios.post(`${API_URL}`, staff);
};

export const deleteStaff = async (staffId: number) => {
    return await axios.delete(`${API_URL}/${staffId}`);
};
