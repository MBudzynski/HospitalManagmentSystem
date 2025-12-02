import Sidebar from "../component/Sidebar.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import { Form, Button, Container } from "react-bootstrap";
import { type HospitalizationDrugDTO, hospitalizationDrugFieldLabels } from "../dto/HospitalizationDrugDTO.tsx";
import type {PatientHospitalizationDTO} from "../dto/PatientHospitalizationDTO.tsx";
import {addDrugHospitalization} from "../service/HospitalizationDrugService.ts";
import type {DrugDTO} from "../dto/DrugDTO.tsx";
import {getAllDrugQuantity, getAllDrugs, getAllTimeOfDay} from "../service/DrugService.ts";
import type {TimeOfDayDTO} from "../dto/TimeOfDayDTO.ts";
import type {DrugQuantityDTO} from "../dto/DrugQuantityDTO.tsx";

export const HospitalizationDrugAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const hospitalization = location.state as PatientHospitalizationDTO;

    const [allDrugs, setAllDrugs] = useState<DrugDTO[]>([]);
    const [allTimes, setAllTimes] = useState<TimeOfDayDTO[]>([]);
    const [allQuantities, setAllQuantities] = useState<DrugQuantityDTO[]>([]);

    const [hospitalizationDrug, setHospitalizationDrug] = useState<HospitalizationDrugDTO>({
        hospitalizationDrugId: undefined,
        fromDate: "",
        toDate: "",
        drug: undefined,
        timeOfDay: undefined,
        drugQuantity: undefined,
    });

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const [drugs, times, quantities] = await Promise.all([
                    getAllDrugs(),
                    getAllTimeOfDay(),
                    getAllDrugQuantity()
                ]);
                setAllDrugs(drugs);
                setAllTimes(times);
                setAllQuantities(quantities);
            } catch (err) {
                console.error(err);
                alert("Nie udało się pobrać list danych.");
            }
        };
        fetchLists();
    }, []);

    const handleSubmit = async () => {
        if(!hospitalization.patientHospitalizationId) return
        try {
            await addDrugHospitalization(hospitalization.patientHospitalizationId, hospitalizationDrug);
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

    const handleBack = () => navigate("/hospitalization-drugs");

    return (
        <div style={{ height: "100%" }}>
            <Sidebar name={"Lek pacjenta / Dodaj"} />

            <div className="department-details-page" style={{marginTop: "2%"}}>
                <Container fluid className="mt-4" style={{maxWidth: "1200px"}}>
                    <Form>
                        <Form.Group className="mb-3 d-flex align-items-center">
                            <Form.Label style={{ width: "150px", marginBottom: 0 }}>
                                {hospitalizationDrugFieldLabels.fromDate}:
                            </Form.Label>
                            <Form.Control
                                type="date"
                                value={hospitalizationDrug.fromDate || ""}
                                onChange={(e) =>
                                    setHospitalizationDrug({
                                        ...hospitalizationDrug,
                                        fromDate: e.target.value,
                                    })
                                }
                                style={{ maxWidth: "250px" }}
                            />

                            <Form.Label style={{ width: "150px", marginBottom: 0 }}>
                                {hospitalizationDrugFieldLabels.toDate}:
                            </Form.Label>
                            <Form.Control
                                type="date"
                                value={hospitalizationDrug.toDate || ""}
                                onChange={(e) =>
                                    setHospitalizationDrug({
                                        ...hospitalizationDrug,
                                        toDate: e.target.value,
                                    })
                                }
                                style={{ maxWidth: "250px" }}
                            />

                            <Form.Label style={{ width: "150px", marginBottom: 0 }}>
                                {hospitalizationDrugFieldLabels.drug}:
                            </Form.Label>
                            <Form.Select
                                value={hospitalizationDrug.drug?.drugId || ""}
                                onChange={(e) => {
                                    const selectedDrug = allDrugs.find(
                                        (d) => d.drugId === Number(e.target.value)
                                    );
                                    setHospitalizationDrug({
                                        ...hospitalizationDrug,
                                        drug: selectedDrug,
                                    });
                                }}
                                style={{ maxWidth: "250px" }}
                            >
                                <option value="">-- Wybierz lek --</option>
                                {allDrugs.map((drug) => (
                                    <option key={drug.drugId} value={drug.drugId}>
                                        {drug.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex align-items-center">
                            <Form.Label style={{ width: "150px", marginBottom: 0 }}>
                                {hospitalizationDrugFieldLabels.drugQuantity}:
                            </Form.Label>
                            <Form.Select
                                value={hospitalizationDrug.drugQuantity?.drugQuantityId || ""}
                                onChange={(e) => {
                                    const selectedQuantity = allQuantities.find(
                                        (q) => q.drugQuantityId === Number(e.target.value)
                                    );
                                    setHospitalizationDrug({
                                        ...hospitalizationDrug,
                                        drugQuantity: selectedQuantity,
                                    });
                                }}
                                style={{ maxWidth: "250px" }}
                            >
                                <option value="">-- Wybierz ilość --</option>
                                {allQuantities.map((quantity) => (
                                    <option key={quantity.drugQuantityId} value={quantity.drugQuantityId}>
                                        {quantity.description}
                                    </option>
                                ))}
                            </Form.Select>

                            <Form.Label style={{ width: "150px", marginBottom: 0 }}>
                                {hospitalizationDrugFieldLabels.timeOfDay}:
                            </Form.Label>
                            <Form.Select
                                value={hospitalizationDrug.timeOfDay?.timeOfDayId || ""}
                                onChange={(e) => {
                                    const selectedTime = allTimes.find(
                                        (t) => t.timeOfDayId === Number(e.target.value)
                                    );
                                    setHospitalizationDrug({
                                        ...hospitalizationDrug,
                                        timeOfDay: selectedTime,
                                    });
                                }}
                                style={{ maxWidth: "250px" }}
                            >
                                <option value="">-- Wybierz porę dnia --</option>
                                {allTimes.map((time) => (
                                    <option key={time.timeOfDayId} value={time.timeOfDayId}>
                                        {time.description}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                            <Button variant="secondary" onClick={handleBack}>
                                Wróć
                            </Button>
                            <Button variant="success" onClick={handleSubmit}>
                                Dodaj lek
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default HospitalizationDrugAddPage;
