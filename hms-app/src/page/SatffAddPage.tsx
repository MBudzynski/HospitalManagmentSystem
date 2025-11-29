import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { type StaffDTO, staffFieldLabels, formStaffFields } from "../dto/StaffDTO.tsx";
import { FormFields } from "../component/FormFields.tsx";

export const StaffAddPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const staff = location.state as StaffDTO | undefined;

    const [form, setForm] = useState<StaffDTO>({
        staffId: staff?.staffId ?? undefined,
        name: staff?.name ?? undefined,
        surname: staff?.surname ?? undefined,
        peselNumber: staff?.peselNumber ?? undefined,
        title: staff?.title ?? undefined,
        specialization: staff?.specialization ?? undefined,
        phoneNumber: staff?.phoneNumber ?? undefined,
        email: staff?.email ?? undefined,
        professionalLicenseNumber: staff?.professionalLicenseNumber ?? undefined,
    });

    const isEdit = !!staff;

    const handleSubmit = () => {
        if (isEdit) {
            console.log("Zapisuję edycję:", form);
        } else {
            console.log("Dodaję nowego pracownika:", form);
        }
    };

    const handleBack = () => navigate(-1);

    return (
        <div style={{ height: "100%" }}>
            <Sidebar name={isEdit ? `Personel / ${form.name} ${form.surname}` : "Personel / Dodaj"} />

            <div className="department-details-page" style={{ marginTop: "2%" }}>
                <Container fluid className="mt-4" style={{ maxWidth: "1200px" }}>
                    <Form>
                        <FormFields
                            form={form}
                            setForm={setForm}
                            fieldLabels={staffFieldLabels}
                            fields={formStaffFields}
                        />

                        <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                            <Button variant="secondary" onClick={handleBack}>
                                Wróć
                            </Button>
                            <Button variant="success" onClick={handleSubmit}>
                                {isEdit ? "Zapisz zmiany" : "Dodaj personel"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default StaffAddPage;
