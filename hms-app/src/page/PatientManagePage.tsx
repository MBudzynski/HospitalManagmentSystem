import './css/DepartmentManagePage.css';
import {useNavigate} from "react-router-dom";
import {type PatientDTO, patientFieldLabels, dtoFields} from "../dto/PatientDTO.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Button from "react-bootstrap/Button";
import {DataTable} from "../component/DataTabel.tsx";
import Sidebar from "../component/Sidebar.tsx";

export const PatientManagePage = () => {

    const navigate = useNavigate();

    const patients: PatientDTO[] = [
        {patientId: 1, name: "Jan", surname: "Kowalski", birthDate: "1980-05-12", pesel: "80051212345"},
        {patientId: 2, name: "Anna", surname: "Nowak", birthDate: "1990-08-21", pesel: "90082154321"},
        {patientId: 3, name: "Piotr", surname: "Wiśniewski", birthDate: "1975-03-10", pesel: "75031098765"},
    ];

    const handleSearch = async (field: keyof PatientDTO, value: string) => {
        alert(`Szukanie po polu: ${field} | value: ${value}`);
    };

    const handleDelete = (patient: PatientDTO) => {
        alert(`Usuwanie pacjenta: ${patient.name} ${patient.surname}`);
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
                    <DtoSearch<PatientDTO> dtoFields={dtoFields} fieldLabels={patientFieldLabels}
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