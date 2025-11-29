
import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {type DepartmentDTO} from "../dto/DepartmentDTO.tsx";
import {DataTable} from "../component/DataTabel.tsx";
import {formStaffFields, type StaffDTO, staffFieldLabels, tableStaffFields} from "../dto/StaffDTO.tsx";
import {DtoSearch} from "../component/Search.tsx";
import {Sidebar} from "lucide-react";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dept = location.state as DepartmentDTO | undefined;

    const handleSearch = () => {
        alert(`Wyszukuje nie przypisanych pracownikó:`);
    };

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

    const handleBack = () => navigate(-1);

    const handleAdd = () => {
        alert(`Przypisuje lekarza do oddziału:`);
    };

    return (
        <div style={{height: "100%"}}>
            <Sidebar name={"Oddział / Dodaj / Lekarza"}/>

            <div className={"department-details-page"} style={{marginTop: "2%"}}>

                <div style={{alignContent: "center", marginLeft: "30vh", marginTop: "4%", height: "100%"}}>
                    <DtoSearch<StaffDTO> dtoFields={formStaffFields} fieldLabels={staffFieldLabels}
                                              onSearch={handleSearch}/>
                </div>

                <div className="mt-4 mb-4 p-3" style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "white"
                }}>

                    <DataTable<StaffDTO>
                        data={staffs}
                        columns={tableStaffFields}
                        columnLabels={staffFieldLabels}
                        onAdd={handleAdd}
                    />
                </div>

                <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                    <Button variant="secondary" onClick={handleBack}>
                        Wróć
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default DepartmentAddPage;