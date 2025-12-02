export interface TimeOfDayDTO {
    timeOfDayId?: number;
    description?: string;
}

export const timeOfDayFieldLabels: { [key in keyof TimeOfDayDTO]: string } = {
    timeOfDayId: "ID pory dnia",
    description: "Opis",
};

export const timeOfDayFields: (keyof TimeOfDayDTO)[] = [
    "description"
];