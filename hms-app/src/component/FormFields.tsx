import { Form, Row, Col } from "react-bootstrap";

interface FormFieldsProps<T> {
    form: T;
    setForm: (newForm: T) => void;
    fieldLabels: { [key in keyof T]: string };
    fields?: (keyof T)[];
}

export const FormFields = <T extends object>({
                                                        form,
                                                        setForm,
                                                        fieldLabels,
                                                        fields,
                                                    }: FormFieldsProps<T>) => {


    const keys = fields ?? (Object.keys(form) as (keyof T)[]);

    const rows: (keyof T)[][] = [];

    for (let i = 0; i < keys.length; i += 2) {
        rows.push(keys.slice(i, i + 2));
    }

    const handleChange = (key: keyof T, value: string) => {
        const typedValue = typeof form[key] === "number" ? Number(value) : value;
        setForm({ ...form, [key]: typedValue } as T);
    };

    return (
        <>
            {rows.map((rowFields, rowIndex) => (
                <Row className="mb-3 align-items-center" key={rowIndex}>
                    {rowFields.map((key) => (
                        <Col md={6} className="d-flex align-items-center" key={String(key)}>
                            <Form.Label className="me-2" style={{ width: "35%" }}>
                                {fieldLabels[key]}
                            </Form.Label>
                            <Form.Control
                                value={
                                    form[key] === null || form[key] === undefined
                                        ? ""
                                        : String(form[key])
                                }
                                onChange={(e) => handleChange(key, e.target.value)}
                            />
                        </Col>
                    ))}
                    {rowFields.length === 1 && <Col md={6}></Col>}
                </Row>
            ))}
        </>
    );
};