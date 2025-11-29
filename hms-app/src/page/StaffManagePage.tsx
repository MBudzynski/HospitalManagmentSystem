import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentManagePage.css'
import {useNavigate} from "react-router-dom";
import {DataTable} from "../component/DataTabel.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Button from "react-bootstrap/Button";
import {formStaffFields, type StaffDTO, staffFieldLabels, tableStaffFields} from "../dto/StaffDTO.tsx";

export const DepartmentManagePage = () => {

    const navigate = useNavigate();

    const staffs: StaffDTO[] = [
        {
            staffId: 1,
            name: "Adam",
            surname: "Majewski",
            peselNumber: "80010112345",
            title: "dr n. med.",
            specialization: "Kardiolog",
            phoneNumber: "600-111-222",
            email: "adam.majewski@szpital.pl",
            professionalLicenseNumber: "1234567"
        },
        {
            staffId: 2,
            name: "Ewelina",
            surname: "Rybicka",
            peselNumber: "90031254321",
            title: "lek.",
            specialization: "Neurolog",
            phoneNumber: "600-333-444",
            email: "ewelina.rybicka@szpital.pl",
            professionalLicenseNumber: "7654321"
        },
        {
            staffId: 3,
            name: "Marek",
            surname: "Stępień",
            peselNumber: "85052298765",
            title: "dr hab. n. med.",
            specialization: "Chirurg ogólny",
            phoneNumber: "600-555-666",
            email: "marek.stepien@szpital.pl",
            professionalLicenseNumber: "1122334"
        },
        {
            staffId: 4,
            name: "Karolina",
            surname: "Bielska",
            peselNumber: "92081176543",
            title: "lek.",
            specialization: "Pediatra",
            phoneNumber: "600-777-888",
            email: "karolina.bielska@szpital.pl",
            professionalLicenseNumber: "4433221"
        }
    ];

    const handleSearch = async (field: keyof StaffDTO, value: string) => {
        alert(`Szukanie po polu: ${field}` + ' value: ' + value);
    };

    const handleDelete = (staff: StaffDTO) => {
        alert(`Usuwanie personelu: ${staff.staffId}`);
    };

    const handleView = (staff: StaffDTO) => {
        navigate("/staffs/details", {state: staff})
    }

    const handleAdd = () => {
        navigate("/staffs/details");
    }

    return (
        <div style={{height: "100%"}}>
            <Sidebar name="Pracownicy"/>

            <div className="department-page">
                <div style={{alignContent: "center", marginLeft: "30vh", marginTop: "4%", height: "100%"}}>
                    <DtoSearch<StaffDTO> dtoFields={formStaffFields} fieldLabels={staffFieldLabels}
                                              onSearch={handleSearch}/>
                </div>
                <div className="d-flex justify-content-end mb-3">
                    <Button variant="success" onClick={handleAdd} style={{marginRight: "22vh", marginTop: "5vh"}}>
                        Dodaj pracownika
                    </Button>
                </div>

                <div style={{maxWidth: "80%", margin: "5vh auto", overflowY: "auto", maxHeight: "40vh"}}>
                    <DataTable<StaffDTO>
                        data={staffs}
                        columns={tableStaffFields}
                        columnLabels={staffFieldLabels}
                        onDelete={handleDelete}
                        onView={handleView}
                    />
                </div>
            </div>
        </div>
    );
}


export default DepartmentManagePage;