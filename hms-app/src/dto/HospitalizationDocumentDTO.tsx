import type {DocumentDTO} from "./DocumentDTO";

export interface HospitalizationDocumentDTO {
    hospitalizationDocumentId?: number;
    title?: string;
    userLogin?: string;
    createdAt?: string;
    documents?: DocumentDTO[];
}

export const hospitalizationDocumentFieldLabels: { [key in keyof HospitalizationDocumentDTO]: string } = {
    hospitalizationDocumentId: "ID dokumentu hospitalizacji",
    title: "Tytuł",
    userLogin: "Użytkownik",
    createdAt: "Data utworzenia",
    documents: "Dokumenty",
};

export const hospitalizationDocumentFields: (keyof HospitalizationDocumentDTO)[] = [
    "hospitalizationDocumentId",
    "title",
    "userLogin",
    "createdAt",
    "documents",
];
