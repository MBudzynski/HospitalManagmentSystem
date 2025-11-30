import axios from "axios";
import type {RoomDTO} from "../dto/RoomDTO";

const API_URL = "http://localhost:8085";

export const addRoomToDepartment = async (room: RoomDTO): Promise<RoomDTO> => {
    const response = await axios.post<RoomDTO>(`${API_URL}/department/room`, room);
    return response.data;
};

export const deleteRoom = async (roomId: number): Promise<void> => {
    await axios.delete(`${API_URL}/department/room/${roomId}`);
};