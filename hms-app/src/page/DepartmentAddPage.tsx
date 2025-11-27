import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import {type DepartmentDTO, departmentFieldLabels} from "../dto/DepartmentDTO.tsx";
import {type RoomDTO, roomFieldLabels} from "../dto/RoomDTO.tsx";
import {DataTable} from "../component/DataTabel.tsx";
import {FormFields} from "../component/FormFields.tsx";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dtoFields: (keyof RoomDTO)[] = ["number", "flat", "bedNumber"];
    const dept = location.state as DepartmentDTO | undefined;

    const [form, setForm] = useState<DepartmentDTO>({
        departmentId: dept?.departmentId ?? 0,
        departmentName: dept?.departmentName ?? "",
        departmentCode: dept?.departmentCode ?? 0,
        headOfDepartment: dept?.headOfDepartment ?? "",
        deputyHeadOfDepartment: dept?.deputyHeadOfDepartment ?? "",
        staffsPhoneNumber: dept?.staffsPhoneNumber ?? "",
        nursesPhoneNumber: dept?.nursesPhoneNumber ?? "",
        headPhoneNumber: dept?.headPhoneNumber ?? "",
    });

    const rooms: RoomDTO[] = [
        {
            roomId: 1,
            number: "101",
            flat: 1,
            bedNumber: 2
        },
        {
            roomId: 2,
            number: "102",
            flat: 1,
            bedNumber: 1
        },
        {
            roomId: 3,
            number: "201",
            flat: 2,
            bedNumber: 3
        },
        {
            roomId: 4,
            number: "202",
            flat: 2,
            bedNumber: 2
        },
        {
            roomId: 5,
            number: "301",
            flat: 3,
            bedNumber: 1
        },
        {
            roomId: 6,
            number: "302",
            flat: 3,
            bedNumber: 2
        },
        {
            roomId: 7,
            number: "303",
            flat: 3,
            bedNumber: 3
        },
        {
            roomId: 8,
            number: "304",
            flat: 3,
            bedNumber: 1
        }
    ];

    const isEdit = !!dept;

    const handleSubmit = () => {
        if (isEdit) {
            console.log("Zapisuję edycję:", form);
        } else {
            console.log("Dodaję nowy oddział:", form);
        }
    };

    const handleBack = () => {
        console.log("Dodaję nowy oddział:", form);
    };

    const handleDelete = () => {
        alert(`Usuwanie działu:`);
    };

    const handleViewRoom = (room: RoomDTO) => {
        navigate("/department/details/rooms", { state: room });
    };

    const handleAddRoom = () => {
        navigate("/department/details/rooms");
    };

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

                            <div className="d-flex justify-content-end mb-3">
                                <Button variant="success" onClick={handleAddRoom}
                                        style={{marginRight: "22vh", marginTop: "5vh"}}>
                                    Dodaj sale
                                </Button>
                            </div>

                            <div style={{maxWidth: "80%", margin: "5vh auto", overflowY: "auto", maxHeight: "40vh"}}>
                                <DataTable<RoomDTO>
                                    data={rooms}
                                    columns={dtoFields}
                                    columnLabels={roomFieldLabels}
                                    onDelete={handleDelete}
                                    onView={handleViewRoom}
                                />
                            </div>
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