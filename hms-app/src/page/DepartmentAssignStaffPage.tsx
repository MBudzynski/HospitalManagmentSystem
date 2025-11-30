import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {DataTable} from "../component/DataTabel.tsx";
import {type StaffDTO, staffFieldLabels, tableStaffFields} from "../dto/StaffDTO.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Sidebar from "../component/Sidebar.tsx";
import {useEffect, useState} from "react";
import {assignStaffToDepartment, searchUnassignStaff} from "../service/StaffService.ts";
import {
    searchStaffFieldLabels,
    searchStaffFields,
    type StaffSearchCriteria
} from "../dto/search/StaffSerachCriteria.tsx";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(true);
    const [staffs, setStaffs] = useState<StaffDTO[]>([]);
    const { departmentName = "", departmentId } = location.state as {
        departmentId: number;
        departmentName: string;
    };

    const handleSearch = (field: keyof StaffSearchCriteria, value: string) => {

        searchUnassignStaff(field, value)
            .then((data) => setStaffs(data))
            .catch((error) => {
                console.error(error);
                alert("Nie udało się wyszukać personelu.");
            });
    };

    useEffect(() => {
        const fetchStaffs = async () => {
            try {
                const data = await searchUnassignStaff();
                setStaffs(data);
            } catch (error) {
                console.error(error);
                alert("Nie udało się pobrać personelu.");
            } finally {
                setLoading(false);
            }
        };
        fetchStaffs();
    }, []);

    const handleBack = () => {
        navigate("/department/details", {
            state: { departmentId: departmentId }
        });
    };

    const handleAdd = async (staff: StaffDTO) => {
        if (!staff.staffId) return;

        try {
            await assignStaffToDepartment(staff.staffId, departmentId);
            const updated = await searchUnassignStaff();
            setStaffs(updated);
        } catch (error) {
            console.error(error);
            alert("Nie udało się przypisać pracownika.");
        }
    };

    return (
        <div style={{height: "100%"}}>
            <Sidebar name={"Oddział / " + departmentName + " / Personel / Dodaj"}/>

            <div className={"department-details-page"} style={{marginTop: "2%"}}>

                <div style={{alignContent: "center", marginLeft: "30vh", marginTop: "4%", height: "100%"}}>
                    <DtoSearch<StaffSearchCriteria>
                        dtoFields={searchStaffFields}
                        fieldLabels={searchStaffFieldLabels}
                        onSearch={handleSearch}
                    />
                </div>

                <div className="mt-4 mb-4 p-3" style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "white"
                }}>
                    <h4 className="mb-3">Perosnel bez przypisanego oddziału:</h4>

                    {!loading ? (
                        staffs.length > 0 ? (
                            <DataTable<StaffDTO>
                                data={staffs}
                                columns={tableStaffFields}
                                columnLabels={staffFieldLabels}
                                onAdd={handleAdd}
                            />
                        ) : (
                            <p>Nie odnaleziono pasujących wyników.</p>
                        )
                    ) : (
                        <p>Ładowanie danych...</p>
                    )}
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