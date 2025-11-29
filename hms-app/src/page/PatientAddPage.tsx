import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import {type PatientDTO, patientFieldLabels} from "../dto/PatientDTO.tsx";
import {FormFields} from "../component/FormFields.tsx";

export const PatientAddPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const patient = location.state as PatientDTO | undefined;

    const [form, setForm] = useState<PatientDTO>({
        patientId: patient?.patientId ?? undefined,
        name: patient?.name ?? "",
        surname: patient?.surname ?? "",
        pesel: patient?.pesel ?? "",
        birthDate: patient?.birthDate ?? "",
        gender: patient?.gender ?? "",
        phone: patient?.phone ?? "",
        email: patient?.email ?? "",
        street: patient?.street ?? "",
        city: patient?.city ?? "",
        houseNumber: patient?.houseNumber ?? "",
        postalCode: patient?.postalCode ?? "",
    });

    const isEdit = !!patient;

    const handleSubmit = () => {
        if (isEdit) {
            console.log("Zapisuję edycję pacjenta:", form);
        } else {
            console.log("Dodaję nowego pacjenta:", form);
        }
    };

    const handleBack = () => navigate(-1);

    // pola formularza do wyświetlenia
    const formFields: (keyof PatientDTO)[] = [
        "name",
        "surname",
        "pesel",
        "birthDate",
        "gender",
        "phone",
        "email",
        "street",
        "city",
        "houseNumber",
        "postalCode",
    ];

    return (
        <div style={{height: "100%"}}>
            <Sidebar name={isEdit ? `Pacjent / ${form.name} ${form.surname}` : "Pacjent / Dodaj"}/>

            <div className="department-details-page" style={{marginTop: "2%"}}>
                <Container fluid className="mt-4" style={{maxWidth: "1200px"}}>
                    <Form>
                        <FormFields
                            form={form}
                            setForm={setForm}
                            fieldLabels={patientFieldLabels}
                            fields={formFields}
                        />

                        <div className="d-flex justify-content-end gap-3 mb-4 me-2 mt-4">
                            <Button variant="secondary" onClick={handleBack}>
                                Wróć
                            </Button>
                            <Button variant="success" onClick={handleSubmit}>
                                {isEdit ? "Zapisz zmiany" : "Dodaj pacjenta"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default PatientAddPage;
