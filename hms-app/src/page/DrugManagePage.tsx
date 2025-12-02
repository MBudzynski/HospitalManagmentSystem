import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentManagePage.css';
import {useNavigate} from "react-router-dom";
import {DataTable} from "../component/DataTabel.tsx";
import {DtoSearch} from "../component/Search.tsx";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {type DrugDTO, tableDrugFields, drugFieldLabels} from "../dto/DrugDTO.tsx";
import {searchDrugFieldLabels, searchDrugFields, type DrugSearchCriteria} from "../dto/search/DrugSearchCriteria.tsx";
import {getAllDrugs, searchDrug, deleteDrug} from "../service/DrugService.ts";

export const DrugManagePage = () => {

    const navigate = useNavigate();
    const [drugs, setDrugs] = useState<DrugDTO[]>([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getAllDrugs();
                setDrugs(data);
            } catch (err) {
                console.error(err);
                alert("Nie udało się pobrać listy leków.");
            }
        };
        fetch();
    }, []);

    const handleSearch = async (field: keyof DrugSearchCriteria, value: string) => {
        try {
            const data = await searchDrug(field, value);
            setDrugs(data);
        } catch (error) {
            console.error(error);
            alert("Nie udało się wyszukać leków.");
        }
    };

    const handleDelete = async (drug: DrugDTO) => {
        if (!drug.drugId) return;
        try {
            await deleteDrug(drug.drugId);
            setDrugs(prev => prev.filter(x => x.drugId !== drug.drugId));
        } catch (error) {
            console.error(error);
            alert("Nie udało się usunąć leku.");
        }
    };

    const handleView = (drug: DrugDTO) => {
        navigate("/drug/details", {state: drug});
    };

    const handleAdd = () => {
        navigate("/drug/details");
    };

    return (
        <div style={{height: "100%"}}>
            <Sidebar name="Leki"/>

            <div className="department-page">

                <div style={{alignContent: "center", marginLeft: "30vh", marginTop: "4%", height: "100%"}}>
                    <DtoSearch<DrugSearchCriteria>
                        dtoFields={searchDrugFields}
                        fieldLabels={searchDrugFieldLabels}
                        onSearch={handleSearch}
                    />
                </div>

                <div className="d-flex justify-content-end mb-3">
                    <Button
                        variant="success"
                        onClick={handleAdd}
                        style={{marginRight: "22vh", marginTop: "5vh"}}
                    >
                        Dodaj lek
                    </Button>
                </div>

                <div style={{maxWidth: "80%", margin: "5vh auto", overflowY: "auto", maxHeight: "40vh"}}>
                    <DataTable<DrugDTO>
                        data={drugs}
                        columns={tableDrugFields}
                        columnLabels={drugFieldLabels}
                        onDelete={handleDelete}
                        onView={handleView}
                    />
                </div>

            </div>
        </div>
    );
};

export default DrugManagePage;
