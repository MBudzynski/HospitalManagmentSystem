export interface DrugQuantityDTO {
    drugQuantityId?: number;
    description?: string;
}

export const drugQuantityFieldLabels: { [key in keyof DrugQuantityDTO]: string } = {
    drugQuantityId: "ID ilości leku",
    description: "Opis",
};

export const drugQuantityFields: (keyof DrugQuantityDTO)[] = ["drugQuantityId", "description"];
