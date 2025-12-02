import Sidebar from "../component/Sidebar.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Col, Container, Form, Row, Button} from "react-bootstrap";
import type {PatientHospitalizationDTO} from "../dto/PatientHospitalizationDTO";
import type {HospitalizationDrugDTO} from "../dto/HospitalizationDrugDTO";
import type {MedicalHistoryDTO} from "../dto/MedicalHistoryDTO";
import type {HospitalizationDocumentDTO} from "../dto/HospitalizationDocumentDTO";
import Nav from "react-bootstrap/Nav";
import {DataTable} from "../component/DataTabel.tsx";
import {getHospitalizationsById} from "../service/PatientHospitalizationService.ts";

export const HospitalizationDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hosp = location.state as PatientHospitalizationDTO;
    const [activeTab, setActiveTab] = useState<"drugs" | "history" | "documents">("drugs");
    const [hospitalization, setHospitalization] = useState<PatientHospitalizationDTO>();

    useEffect(() => {
        const fetchPatientHospitalization = async () => {
            if (!hosp?.patientHospitalizationId) return;
            try {
                const data = await getHospitalizationsById(hosp.patientHospitalizationId);
                if (data) {
                    setHospitalization(data);
                }
            } catch (err) {
                console.error(err);
                alert("Nie udało się pobrać danych oddziału.");
            }
        };

        fetchPatientHospitalization();
    }, [hosp?.patientHospitalizationId]);

    if (!hospitalization) { return <div>Brak danych hospitalizacji</div>; }

    const formatDate = (date?: string) => {
        if (!date) return "";
        return new Date(date).toLocaleDateString("pl-PL");
    };

    const patientName = hospitalization.patient ? `${hospitalization.patient.name} ${hospitalization.patient.surname}` : "";
    const patientPesel = hospitalization.patient?.pesel ?? "";
    const roomNumber = hospitalization.room?.number ?? "";

    const drugs = hospitalization.hospitalizationDrugs ?? [];
    const medicalHistories = hospitalization.medicalHistories ?? [];
    const documents = hospitalization.hospitalizationDocuments ?? [];

    const mappedHistories = medicalHistories.map(h => ({
        ...h,
        staffName: h.staff ? `${h.staff.title} ${h.staff.name} ${h.staff.surname}` : "",
        staffSpecialization: h.staff ? `${h.staff.specialization}` : "",
        creationHistoryDate: formatDate(h.creationDate)
    }));

    const mappedDrugs = drugs.map(d => ({
        ...d,
        drugName: d.drug?.name ?? "",
        timeOfDayDesc: d.timeOfDay?.description ?? "",
        drugQuantityDesc: d.drugQuantity?.description ?? "",
        fromDate: formatDate(d.fromDate),
        toDate: formatDate(d.toDate)
    }));

    const mappedDocuments = documents.map(doc => ({
        ...doc,
        createdAt: formatDate(doc.createdAt)
    }));

    // Kolumny
    const drugColumns = ["drugName", "fromDate", "toDate", "timeOfDayDesc", "drugQuantityDesc"];
    const drugLabels = {
        drugName: "Lek",
        fromDate: "Od",
        toDate: "Do",
        timeOfDayDesc: "Pora dnia",
        drugQuantityDesc: "Dawkowanie"
    };

    const historyColumns = ["staffName", "staffSpecialization", "creationHistoryDate", "description"];
    const historyLabels = {
        staffName: "Personel",
        staffSpecialization: "Specjalizacja",
        creationHistoryDate: "Data",
        description: "Opis"
    };

    const documentColumns: (keyof HospitalizationDocumentDTO)[] = ["title", "userLogin", "createdAt"];
    const documentLabels: Record<string, string> = {
        title: "Tytuł",
        userLogin: "Dodane przez",
        createdAt: "Data utworzenia"
    };

    const handleAddDrug = () => {
        navigate("/hospitalization/details/drug/add", { state: hospitalization });
    };

    const handleAddHistory = () => {
        console.log("Dodaj wpis historii");
        navigate("/hospitalization/details/medical-history/add", { state: hospitalization });
    };

    const handleAddDocument = () => {
        console.log("Dodaj dokument");
    };

    const handleBack = () => {
        navigate("/hospitalisation");
    };

    return (
        <div style={{height: "100%"}}>

            <Sidebar name={`Hospitalizacja / ${hospitalization.room?.department?.departmentName} / ${patientName}`}/>

            <div className="department-details-page" style={{marginTop: "2%"}}>

                <Container style={{marginTop: "2%"}}>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="patientName">
                            <Form.Label column sm={1}>Pacjent:</Form.Label>
                            <Col sm={3}><Form.Control type="text" value={patientName} readOnly /></Col>

                            <Form.Label column sm={1}>PESEL:</Form.Label>
                            <Col sm={3}><Form.Control type="text" value={patientPesel} readOnly /></Col>

                            <Form.Label column sm={1}>Sala:</Form.Label>
                            <Col sm={3}><Form.Control type="text" value={roomNumber} readOnly /></Col>
                        </Form.Group>
                    </Form>

                    <div className="mt-4 mb-4 p-3" style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        backgroundColor: "white"
                    }}>

                        <Nav variant="tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k as any)}>
                            <Nav.Item><Nav.Link eventKey="drugs">Leki</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="history">Historia leczenia</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="documents">Dokumenty</Nav.Link></Nav.Item>
                        </Nav>

                        <div className="d-flex justify-content-end mb-3">
                            {activeTab === "drugs" && (
                                <Button
                                    variant="success"
                                    onClick={handleAddDrug}
                                    style={{marginRight: "22vh", marginTop: "5vh"}}>
                                    ➕ Dodaj lek
                                </Button>
                            )}
                            {activeTab === "history" && (
                                <Button
                                    variant="success"
                                    onClick={handleAddHistory}
                                    style={{marginRight: "22vh", marginTop: "5vh"}}>
                                    ➕ Dodaj wpis leczenia
                                </Button>
                            )}
                            {activeTab === "documents" && (
                                <Button
                                    variant="success"
                                    onClick={handleAddDocument}
                                    style={{marginRight: "22vh", marginTop: "5vh"}}>
                                    ➕ Dodaj dokument
                                </Button>
                            )}
                        </div>

                        <div style={{maxWidth: "80%", margin: "5vh auto", maxHeight: "50vh", overflowY: "auto"}}>
                            {activeTab === "drugs" && (
                                <DataTable<HospitalizationDrugDTO>
                                    data={mappedDrugs}
                                    columns={drugColumns}
                                    columnLabels={drugLabels}
                                />
                            )}

                            {activeTab === "history" && (
                                <DataTable<MedicalHistoryDTO>
                                    data={mappedHistories}
                                    columns={historyColumns}
                                    columnLabels={historyLabels}
                                />
                            )}

                            {activeTab === "documents" && (
                                <DataTable<HospitalizationDocumentDTO>
                                    data={mappedDocuments}
                                    columns={documentColumns}
                                    columnLabels={documentLabels}
                                />
                            )}
                        </div>
                    </div>

                    <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                        <Button variant="secondary" onClick={handleBack}>
                            Wróć
                        </Button>
                    </div>

                </Container>
            </div>
        </div>
    );
};

export default HospitalizationDetailsPage;
