import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {type PatientDTO, patientFieldLabels} from "../dto/PatientDTO.tsx";
import {FormFields} from "../component/FormFields.tsx";

export const PatientFormPage = ({ patient }: { patient?: PatientDTO }) => {
    const [form, setForm] = useState<PatientDTO>({
        patientId: patient?.patientId ?? 0,
        name: patient?.name ?? "",
        surname: patient?.surname ?? "",
        gender: patient?.gender ?? "",
        phone: patient?.phone ?? "",
        email: patient?.email ?? "",
        street: patient?.street ?? "",
        city: patient?.city ?? "",
        houseNumber: patient?.houseNumber ?? "",
        postalCode: patient?.postalCode ?? "",
    });

    const handleSubmit = () => {
        console.log("Zapisz pacjenta:", form);
    };

    const handleBack = () => {
        console.log("Powrót do listy pacjentów");
    };

    return (
        <Container fluid className="mt-4" style={{ maxWidth: "1200px" }}>
            <h2 className="mb-4">{patient ? "Edycja pacjenta" : "Dodaj nowego pacjenta"}</h2>

            <Form>
                <FormFields
                    form={form}
                    setForm={setForm}
                    fieldLabels={patientFieldLabels}
                />

                <div className="d-flex justify-content-end gap-3 mt-4">
                    <Button variant="secondary" onClick={handleBack}>
                        Wróć
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Zapisz
                    </Button>
                </div>
            </Form>
        </Container>
    );
};