export interface DocumentDTO {
    documentId?: number;
    userLogin?: string;
    addDateTime?: string; // ISO string, np. "2025-12-01T12:00:00"
    path?: string;
}

export const documentFieldLabels: { [key in keyof DocumentDTO]: string } = {
    documentId: "ID dokumentu",
    userLogin: "Użytkownik",
    addDateTime: "Data dodania",
    path: "Ścieżka",
};

export const documentFields: (keyof DocumentDTO)[] = [
    "documentId",
    "userLogin",
    "addDateTime",
    "path",
];
