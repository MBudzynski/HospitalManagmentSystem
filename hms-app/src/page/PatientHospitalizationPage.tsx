import Sidebar from "../component/Sidebar";
import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { type DepartmentDTO } from "../dto/DepartmentDTO";
import { getDepartments } from "../service/DepartmentService";
import { type PatientHospitalizationDTO } from "../dto/PatientHospitalizationDTO";
import {finishHospitalization, getHospitalizationsByDepartment} from "../service/PatientHospitalizationService";
import { DataTable } from "../component/DataTabel";
import { useNavigate } from "react-router-dom";

export const HospitalizationDepartmentPage = () => {
    const navigate = useNavigate();

    const [departments, setDepartments] = useState<DepartmentDTO[]>([]);
    const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | undefined>(undefined);
    const [hospitalizations, setHospitalizations] = useState<PatientHospitalizationDTO[]>([]);

    useEffect(() => {
        const fetchDepts = async () => {
            try {
                const data = await getDepartments();
                setDepartments(data);
            } catch (e) {
                console.error(e);
                alert("Nie udało się pobrać listy oddziałów");
            }
        };
        fetchDepts();
    }, []);

    const handleDepartmentChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = Number(e.target.value);
        setSelectedDepartmentId(id);

        if (!id) {
            setHospitalizations([]);
            return;
        }

        try {
            const data = await getHospitalizationsByDepartment(id);
            setHospitalizations(data);
        } catch (e) {
            console.error(e);
            alert("Nie udało się pobrać hospitalizacji");
        }
    };

    const handleView = (hospitalizationId: number | undefined) => {
        const selectedHospitalization = hospitalizations.find(h => h.patientHospitalizationId === hospitalizationId);
        if (!selectedHospitalization) return;

        navigate("/hospitalization/details", { state: selectedHospitalization });
    };

    const handleAdd = () => {
        if (!selectedDepartmentId) {
            alert("Najpierw wybierz oddział!");
            return;
        }
        navigate("/hospitalization/add", { state: { departmentId: selectedDepartmentId } });
    };

    const handleFinish = async (hospitalizationId: number | undefined) => {
        if (!hospitalizationId) return;
        try {
            await finishHospitalization(hospitalizationId);
            setHospitalizations(prev => prev.filter(h => h.patientHospitalizationId !== hospitalizationId));
            alert("Hospitalizacja zakończona pomyślnie");
        } catch (error) {
            console.error(error);
            alert("Nie udało się zakończyć hospitalizacji");
        }
    };

    const columns = ["patient", "dateFrom", "dateTo", "room"];
    const labels: Record<string, string> = {
        patient: "Pacjent",
        dateFrom: "Od",
        dateTo: "Do",
        room: "Pokój"
    };

    const mappedData = hospitalizations.map(h => ({
        patientHospitalizationId: h.patientHospitalizationId,
        patient: h.patient ? `${h.patient.name} ${h.patient.surname}` : "",
        dateFrom: h.dateFrom,
        dateTo: h.dateTo ?? "Obecnie",
        room: h.room?.number ?? ""
    }));

    return (
        <div style={{ height: "100%" }}>
            <Sidebar name="Hospitalizacje" />
            <div className="department-page">
                <Container style={{ maxWidth: "60%", marginTop: "5vh", marginBottom: "5vh" }}>
                    <h2>Hospitalizacje na oddziale</h2>
                    <Form.Group className="mt-4">
                        <Form.Label>Wybierz oddział:</Form.Label>
                        <Form.Select value={selectedDepartmentId ?? ""} onChange={handleDepartmentChange}>
                            <option value="">-- wybierz --</option>
                            {departments.map(d => (
                                <option key={d.departmentId} value={d.departmentId}>
                                    {d.departmentName}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Container>

                <div className="d-flex justify-content-end mb-3">
                    <Button
                        variant="success"
                        onClick={handleAdd}
                        style={{ marginRight: "22vh", marginTop: "5vh" }}
                    >
                        Dodaj pobyt pacjenta
                    </Button>
                </div>

                {selectedDepartmentId && (
                    <div style={{ maxWidth: "80%", margin: "5vh auto", overflowY: "auto", maxHeight: "50vh" }}>
                        <DataTable
                            data={mappedData}
                            columns={columns}
                            columnLabels={labels}
                            onView={(row) => handleView(row.patientHospitalizationId)}
                            onFinish={(row) => handleFinish(row.patientHospitalizationId)}
                            onDelete={undefined}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HospitalizationDepartmentPage;
