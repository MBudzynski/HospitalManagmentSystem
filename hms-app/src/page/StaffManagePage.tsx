import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentManagePage.css'
import {useNavigate} from "react-router-dom";
import {DataTable} from "../component/DataTabel.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Button from "react-bootstrap/Button";
import {type StaffDTO, staffFieldLabels, tableStaffFields} from "../dto/StaffDTO.tsx";
import {useEffect, useState} from "react";
import {deleteStaff, getAllStaffs, searchStaff} from "../service/StaffService.ts";
import {
    searchStaffFieldLabels,
    searchStaffFields,
    type StaffSearchCriteria
} from "../dto/search/StaffSerachCriteria.tsx";

export const DepartmentManagePage = () => {

    const navigate = useNavigate();

    const [staffs, setStaffs] = useState<StaffDTO[]>([]);

    useEffect(() => {
        const fetchStaffs = async () => {
            try {
                const data = await getAllStaffs();
                if (data) {
                    setStaffs(data);
                }
            } catch (err) {
                console.error(err);
                alert("Nie udało się pobrać danych perosnelu.");
            }
        };

        fetchStaffs();
    }, []);

    const handleSearch = async (field: keyof StaffSearchCriteria, value: string) => {
        searchStaff(field, value)
            .then((data) => setStaffs(data))
            .catch((error) => {
                console.error(error);
                alert("Nie udało się wyszukać personelu.");
            });
    };

    const handleDelete = async (staff: StaffDTO) => {
        if (!staff.staffId) return;
        try {
            await deleteStaff(staff.staffId);
            setStaffs(prev => prev.filter(x => x.staffId!== staff.staffId));
        } catch (error) {
            console.error(error);
            alert("Nie udało się usunąć personelu. Personel ciagle przypiany do działu lub posiada wypisaną dokumentacje");
        }
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
                    <DtoSearch<StaffSearchCriteria>
                        dtoFields={searchStaffFields}
                        fieldLabels={searchStaffFieldLabels}
                        onSearch={handleSearch}
                    />
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