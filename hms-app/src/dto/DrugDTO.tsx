export interface DrugDTO {
    drugId?: number;
    name?: string;
    activeIngredient?: string;
    dosage?: string;
    dosageForm?: string;
    quantity?: string;
}

export const tableDrugFields: (keyof DrugDTO)[] = [
    "name",
    "activeIngredient",
    "dosage",
    "dosageForm",
    "quantity"
];

export const drugFieldLabels: Record<keyof DrugDTO, string> = {
    drugId: "Id",
    name: "Nazwa",
    activeIngredient: "Substancja czynna",
    dosage: "Dawkowanie",
    dosageForm: "Forma",
    quantity: "Ilość"
};