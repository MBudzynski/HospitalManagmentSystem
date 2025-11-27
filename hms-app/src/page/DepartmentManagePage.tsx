import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentManagePage.css'
import {DataTable} from "../component/DataTabel.tsx";
import type {DepartmentDTO} from "../dto/DepartmentDTO.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Button from "react-bootstrap/Button";

export const DepartmentManagePage = () => {

    const dtoFields: (keyof DepartmentDTO)[] = ["departmentCode", "departmentName", "headOfDepartment"];
    const departmentFieldLabels: { [key in keyof DepartmentDTO]: string } = {
        departmentId: "ID działu",
        departmentName: "Nazwa działu",
        departmentCode: "Kod działu",
        headOfDepartment: "Kierownik działu",
        deputyHeadOfDepartment: "Zastępca kierownika",
        staffsPhoneNumber: "Telefon personelu",
        nursesPhoneNumber: "Telefon pielęgniarek",
        headPhoneNumber: "Telefon kierownika",
    };

    const departments: DepartmentDTO[] = [
        {
            departmentId: 1,
            departmentName: "Oddział Kardiologii",
            departmentCode: 1,
            headOfDepartment: "dr Janusz Kozak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        },
        {
            departmentId: 2,
            departmentName: "Oddział Ortopedii",
            departmentCode: 2,
            headOfDepartment: "prof dr hab. Urszula Nowak",
            deputyHeadOfDepartment: "2",
            staffsPhoneNumber: "3",
            nursesPhoneNumber: " 4",
            headPhoneNumber: "5 "
        }
    ];

    const handleSearch = async (field: keyof DepartmentDTO, value: string) => {
        alert(`Szukanie po polu: ${field}` + ' value: ' + value);
    };

    const handleDelete = (dept: DepartmentDTO) => {
        alert(`Usuwanie działu: ${dept.departmentName}`);
    };

    const handleView = (dept: DepartmentDTO) => {
        alert(`Szegóły działu: ${dept.departmentName}`);
    }

    const handleAdd = () => {
        alert(`Dodaj oddział`);
    }

    return (
        <div className="department-page" >
            <Sidebar name="Oddziały"/>

            <div style={{alignContent: "center", marginLeft: "30vh", marginTop: "4%", height: "100%"}}>
                <DtoSearch<DepartmentDTO> dtoFields={dtoFields} fieldLabels={departmentFieldLabels} onSearch={handleSearch}/>
            </div>

            <div className="d-flex justify-content-end mb-3">
                <Button variant="success" onClick={handleAdd} style={{ marginRight: "22vh", marginTop: "5vh" }}>
                    Dodaj nowy oddział
                </Button>
            </div>

            <div style={{maxWidth: "80%", margin: "5vh auto", overflowY: "auto", maxHeight: "40vh"}}>
                <DataTable<DepartmentDTO>
                    data={departments}
                    columns={dtoFields}
                    columnLabels={departmentFieldLabels}
                    onDelete={handleDelete}
                    onView={handleView}
                />
            </div>
        </div>
    );
}


export default DepartmentManagePage;