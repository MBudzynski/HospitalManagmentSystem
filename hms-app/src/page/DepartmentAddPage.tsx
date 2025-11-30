import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import {type DepartmentDTO, departmentFieldLabels} from "../dto/DepartmentDTO.tsx";
import {FormFields} from "../component/FormFields.tsx";
import {DepartmentTabs} from "../component/DepartmentTabs.tsx";
import {getDepartmentById} from "../service/DepartmentService.ts";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dept = location.state as DepartmentDTO | undefined;

    useEffect(() => {
        const fetchDepartment = async () => {
            if (!dept?.departmentId) return;
            try {
                const data = await getDepartmentById(dept.departmentId);
                if (data) {
                    setDepartment(data);
                }
            } catch (err) {
                console.error(err);
                alert("Nie udało się pobrać danych oddziału.");
            }
        };

        fetchDepartment();
    }, [dept?.departmentId]);

    const [department, setDepartment] = useState<DepartmentDTO>({
        rooms: [],
        staffs: [],
        departmentId: undefined,
        departmentName: "",
        departmentCode: undefined,
        headOfDepartment: "",
        deputyHeadOfDepartment: "",
        staffsPhoneNumber: "",
        nursesPhoneNumber: "",
        headPhoneNumber: "",
    });

    const isEdit = !!dept;

    const handleSubmit = () => {
        if (isEdit) {
            console.log("Zapisuję edycję:", department);
        } else {
            console.log("Dodaję nowy oddział:", department);
        }
    };

    const handleBack = () => navigate(-1);

    return (
        <div style={{height: "100%"}}>
            <Sidebar name={isEdit ? "Oddział / " + department.departmentName : "Oddział / Dodaj"}/>

            <div className={"department-details-page"} style={{marginTop: "2%"}}>
                <Container fluid className="mt-4" style={{maxWidth: "1200px"}}>
                    <Form>
                        <FormFields
                            form={department}
                            setForm={setDepartment}
                            fieldLabels={departmentFieldLabels}
                            fields={["departmentName", "departmentCode", "headOfDepartment", "deputyHeadOfDepartment", "headPhoneNumber", "staffsPhoneNumber", "nursesPhoneNumber"]}
                        />

                        {!department?.departmentId ? (
                            <div></div>
                        ) : (
                            <div className="mt-4 mb-4 p-3" style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                backgroundColor: "white"
                            }}>
                                <DepartmentTabs department={department}/></div>
                        )}

                        <div className="d-flex justify-content-end gap-3 mb-4 me-2">
                            <Button variant="secondary" onClick={handleBack}>
                                Wróć
                            </Button>
                            <Button variant="success" onClick={handleSubmit}>
                                {isEdit ? "Zapisz zmiany" : "Dodaj oddział"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
}


export default DepartmentAddPage;