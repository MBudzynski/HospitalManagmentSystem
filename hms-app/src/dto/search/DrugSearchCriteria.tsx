export interface DrugSearchCriteria {
    name?: string;
    activeIngredient?: string;
}

export const searchDrugFields: (keyof DrugSearchCriteria)[] = [
    "name",
    "activeIngredient",
];

export const searchDrugFieldLabels: Record<keyof DrugSearchCriteria, string> = {
    name: "Nazwa",
    activeIngredient: "Substancja czynna",
};
