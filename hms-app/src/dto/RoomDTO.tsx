export interface RoomDTO {
    roomId: number;
    number: string;
    flat: number;
    bedNumber: number;
}

export const roomFieldLabels: { [key in keyof RoomDTO]: string } = {
    roomId: "ID sali",
    number: "Numer sali",
    flat: "Piętro",
    bedNumber: "Liczba łóżek"
};