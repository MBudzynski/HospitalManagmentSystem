import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {type DrugDTO, drugFieldLabels, tableDrugFields} from "../dto/DrugDTO.tsx";
import { FormFields } from "../component/FormFields.tsx";
import { addDrug } from "../service/DrugService.ts";

export const DrugAddPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const drug = location.state as DrugDTO | undefined;

    const [form, setForm] = useState<DrugDTO>({
        drugId: drug?.drugId ?? undefined,
        name: drug?.name ?? undefined,
        activeIngredient: drug?.activeIngredient ?? undefined,
        dosage: drug?.dosage ?? undefined,
        dosageForm: drug?.dosageForm ?? undefined,
        quantity: drug?.quantity ?? undefined,
    });

    const isEdit = !!drug;

    const handleSubmit = async () => {
        try {
            await addDrug(form);
            navigate("/drug");
        } catch (error) {
            console.error(error);
            alert("Nie udało się zapisać danych leku");
        }
    };

    const handleBack = () => navigate(-1);

    return (
        <div style={{ height: "100%" }}>
            <Sidebar name={isEdit ? `Leki / ${form.name}` : "Leki / Dodaj"} />

            <div className="department-details-page" style={{ marginTop: "2%" }}>
                <Container fluid className="mt-4" style={{ maxWidth: "1200px" }}>
                    <Form>
                        <FormFields
                            form={form}
                            setForm={setForm}
                            fieldLabels={drugFieldLabels}
                            fields={tableDrugFields}
                        />

                        <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                            <Button variant="secondary" onClick={handleBack}>
                                Wróć
                            </Button>
                            <Button variant="success" onClick={handleSubmit}>
                                {isEdit ? "Zapisz zmiany" : "Dodaj lek"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default DrugAddPage;
