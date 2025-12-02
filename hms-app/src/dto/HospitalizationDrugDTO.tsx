import type {DrugDTO} from "./DrugDTO";
import type {TimeOfDayDTO} from "./TimeOfDayDTO";
import type {DrugQuantityDTO} from "./DrugQuantityDTO";

export interface HospitalizationDrugDTO {
    hospitalizationDrugId?: number;
    fromDate?: string;
    toDate?: string;
    drug?: DrugDTO;
    timeOfDay?: TimeOfDayDTO;
    drugQuantity?: DrugQuantityDTO;
}

export const hospitalizationDrugFieldLabels: {
    [key in keyof HospitalizationDrugDTO]: string
} = {
    hospitalizationDrugId: "ID podania leku",
    fromDate: "Data od",
    toDate: "Data do",
    drug: "Lek",
    timeOfDay: "Pora dnia",
    drugQuantity: "Dawka",
};

export const hospitalizationDrugFormFields: (keyof HospitalizationDrugDTO)[] = [
    "fromDate",
    "toDate",
    "drug",
    "timeOfDay",
    "drugQuantity",
];