import './css/DepartmentManagePage.css';
import {useNavigate} from "react-router-dom";
import {type PatientDTO, patientFieldLabels, dtoFields} from "../dto/PatientDTO.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Button from "react-bootstrap/Button";
import {DataTable} from "../component/DataTabel.tsx";
import Sidebar from "../component/Sidebar.tsx";
import {useEffect, useState} from "react";
import {deletePatient, getAllPatients, searchPatient} from "../service/PatientService.ts";
import {
    type PatientSearchCriteria,
    searchPatientFieldLabels,
    searchPatientFields
} from "../dto/search/PatientSearchCriteria.tsx";

export const PatientManagePage = () => {

    const navigate = useNavigate();

    const [patients, setPatients] = useState<PatientDTO[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await getAllPatients();
                if (data) {
                    setPatients(data);
                }
            } catch (err) {
                console.error(err);
                alert("Nie udało się pobrać danych perosnelu.");
            }
        };

        fetchPatients();
    }, []);

    const handleSearch = async (field: keyof PatientSearchCriteria, value: string) => {
        searchPatient(field, value)
            .then((data) => setPatients(data))
            .catch((error) => {
                console.error(error);
                alert("Nie udało się wyszukać pacjentów.");
            });
    };

    const handleDelete = async (patient: PatientDTO) => {
        if(!patient.patientId) return;
        try {
            deletePatient(patient.patientId);
            setPatients(prev => prev.filter(x => x.patientId !== patient.patientId))
        } catch (error) {
            console.error(error);
            alert("Nie udało się usunąć pacjenta.");
        }
    };

    const handleView = (patient: PatientDTO) => {
        navigate("/patients/details", {state: patient});
    };

    const handleAdd = () => {
        navigate("/patients/details");
    };

    return (
        <div style={{height: "100%"}}>

            <Sidebar name="Pacjenci"/>

            <div className="department-page">
                <div style={{alignContent: "center", marginLeft: "30vh", marginTop: "4%", height: "100%"}}>
                    <DtoSearch<PatientSearchCriteria> dtoFields={searchPatientFields}
                                                      fieldLabels={searchPatientFieldLabels}
                                                      onSearch={handleSearch}/>
                </div>

                <div className="d-flex justify-content-end mb-3">
                    <Button variant="success" onClick={handleAdd} style={{marginRight: "22vh", marginTop: "5vh"}}>
                        Dodaj nowego pacjenta
                    </Button>
                </div>

                <div style={{maxWidth: "80%", margin: "5vh auto", overflowY: "auto", maxHeight: "40vh"}}>
                    <DataTable<PatientDTO>
                        data={patients}
                        columns={dtoFields}
                        columnLabels={patientFieldLabels}
                        onDelete={handleDelete}
                        onView={handleView}
                    />
                </div>
            </div>
        </div>
    );
};

export default PatientManagePage;