import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

interface DtoSearchProps<T> {
    dtoFields: (keyof T)[];
    fieldLabels: { [key in keyof T]: string };
    onSearch: (field: keyof T, value: string) => void;
}

export const DtoSearch = <T extends object>({
                                                dtoFields,
                                                fieldLabels,
                                                onSearch,
                                            }: DtoSearchProps<T>) => {
    const [selectedField, setSelectedField] = useState<keyof T>(dtoFields[0]);
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => onSearch(selectedField, searchText);
    const handleReset = () => {
        setSearchText("");
        setSelectedField(dtoFields[0]);
        onSearch(selectedField, "");
    };

    return (
        <Form className="mb-5">
            <Row className="align-items-center">
                <Col sm={3}>
                    <Form.Select
                        value={String(selectedField)}
                        onChange={(e) => setSelectedField(e.target.value as keyof T)}
                    >
                        {dtoFields.map((field) => (
                            <option key={String(field)} value={String(field)}>
                                {fieldLabels[field]} {/* polska nazwa */}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                <Col md={5}>
                    <Form.Control
                        type="text"
                        placeholder="Wpisz wartość do wyszukania..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </Col>
                <Col xs={"auto"}>
                    <Button variant="primary" onClick={handleSearchClick} className="me-2">
                        Szukaj
                    </Button>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};