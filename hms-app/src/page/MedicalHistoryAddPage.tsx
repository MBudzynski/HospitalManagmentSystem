import Sidebar from "../component/Sidebar.tsx";
import "./css/DepartmentAddPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {
    type MedicalHistoryDTO,
    medicalHistoryFieldLabels,
    medicalHistoryFields
} from "../dto/MedicalHistoryDTO";
import { FormFields } from "../component/FormFields.tsx";
import { addMedicalHistory } from "../service/MedicalHistoryService.ts";
import type {PatientHospitalizationDTO} from "../dto/PatientHospitalizationDTO.tsx";
import { useEffect } from "react";
import { getAllStaffs } from "../service/StaffService";
import type {StaffDTO} from "../dto/StaffDTO";

export const MedicalHistoryAddPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const hospitalization = location.state as PatientHospitalizationDTO;
    const [staffList, setStaffList] = useState<StaffDTO[]>([]);

    useEffect(() => {
        const loadStaff = async () => {
            try {
                const data = await getAllStaffs();
                setStaffList(data);
            } catch (e) {
                console.error(e);
                alert("Nie udało się pobrać listy personelu");
            }
        };
        loadStaff();
    }, []);

    const [form, setForm] = useState<MedicalHistoryDTO>({
        staff: undefined,
        creationDate: new Date().toISOString(),
        description: "",
        documents: undefined
    });

    const isEdit = !!history;

    const handleSubmit = async () => {
        if(!hospitalization.patientHospitalizationId) return
        try {
            await addMedicalHistory(hospitalization.patientHospitalizationId , form);
            navigate("/hospitalization/details", {
                state : {
                    patientHospitalizationId : hospitalization.patientHospitalizationId
                }
            });
        } catch (error) {
            console.error(error);
            alert("Nie udało się zapisać historii medycznej");
        }
    };

    const handleBack = () => navigate(-1);

    return (
        <div style={{ height: "100%" }}>
            <Sidebar name={"Historia medyczna / Dodaj"} />

            <div className="department-details-page" style={{ marginTop: "2%" }}>
                <Container fluid className="mt-4" style={{ maxWidth: "1200px" }}>
                    <Form>
                        <FormFields
                            form={form}
                            setForm={setForm}
                            fieldLabels={medicalHistoryFieldLabels}
                            fields={medicalHistoryFields.filter(
                                f => f !== "staff" && f !== "documents"
                            )}
                        />

                        <Form.Group className="mb-3">
                            <Form.Label>Personel</Form.Label>
                            <Form.Select
                                value={form.staff?.staffId ?? ""}
                                onChange={(e) => {
                                    const selected = staffList.find(s => s.staffId === Number(e.target.value));
                                    setForm({ ...form, staff: selected });
                                }}
                            >
                                <option value="">-- Wybierz pracownika --</option>
                                {staffList.map(staff => (
                                    <option key={staff.staffId} value={staff.staffId}>
                                        {staff.name} {staff.surname} ({staff.specialization})
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                            <Button variant="secondary" onClick={handleBack}>
                                Wróć
                            </Button>

                            <Button variant="success" onClick={handleSubmit}>
                                {isEdit ? "Zapisz zmiany" : "Dodaj wpis"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default MedicalHistoryAddPage;
