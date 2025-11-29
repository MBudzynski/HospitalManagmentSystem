import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import {type DepartmentDTO, departmentFieldLabels} from "../dto/DepartmentDTO.tsx";
import {FormFields} from "../component/FormFields.tsx";
import {DepartmentTabs} from "../component/DepartmentTabs.tsx";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dept = location.state as DepartmentDTO | undefined;

    const [form, setForm] = useState<DepartmentDTO>({
        departmentId: dept?.departmentId ?? undefined,
        departmentName: dept?.departmentName ?? undefined,
        departmentCode: dept?.departmentCode ?? undefined,
        headOfDepartment: dept?.headOfDepartment ?? undefined,
        deputyHeadOfDepartment: dept?.deputyHeadOfDepartment ?? undefined,
        staffsPhoneNumber: dept?.staffsPhoneNumber ?? undefined,
        nursesPhoneNumber: dept?.nursesPhoneNumber ?? undefined,
        headPhoneNumber: dept?.headPhoneNumber ?? undefined,
    });

    const isEdit = !!dept;

    const handleSubmit = () => {
        if (isEdit) {
            console.log("Zapisuję edycję:", form);
        } else {
            console.log("Dodaję nowy oddział:", form);
        }
    };

    const handleBack = () => navigate(-1);

    return (
        <div  style={{height: "100%"}}>
            <Sidebar name={isEdit ? "Oddział / " + form.departmentName : "Oddział / Dodaj"}/>

            <div className={"department-details-page"} style={{marginTop: "2%"}}>
                <Container fluid className="mt-4" style={{maxWidth: "1200px"}}>
                    <Form>
                        <FormFields
                            form={form}
                            setForm={setForm}
                            fieldLabels={departmentFieldLabels}
                            fields={["departmentName", "departmentCode", "headOfDepartment", "deputyHeadOfDepartment", "headPhoneNumber", "staffsPhoneNumber", "nursesPhoneNumber"]}
                        />

                        <div className="mt-4 mb-4 p-3" style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            backgroundColor: "white"
                        }}>
                            <DepartmentTabs />
                        </div>

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