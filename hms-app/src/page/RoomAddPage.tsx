import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {type RoomDTO, roomFieldLabels, formRoomField} from "../dto/RoomDTO.tsx";
import {FormFields} from "../component/FormFields.tsx";
import {DataTable} from "../component/DataTabel.tsx";
import {type PatientDTO, patientFieldLabels} from "../dto/PatientDTO.tsx";
import {addRoomToDepartment} from "../service/RoomService.ts";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {room, departmentId, departmentName = "Dodaj"} = location.state as {
        room: RoomDTO;
        departmentId: number;
        departmentName: string;
    };

    const patients: PatientDTO[] = room?.hospitalizations?.map(h => h.patient)
        .filter((p): p is PatientDTO => p !== undefined) ?? [];

    const isEdit = !!room;

    const [form, setForm] = useState<RoomDTO>({
        roomId: room?.roomId ?? undefined,
        number: room?.number ?? undefined,
        floor: room?.floor ?? undefined,
        bedNumber: room?.bedNumber ?? undefined
    });

    const handleSubmit = async () => {
        const payload: RoomDTO = {
            ...form,
            department: { departmentId }
        }
        await addRoomToDepartment(payload);

        navigate("/department/details", {
            state: {departmentId: departmentId}
        });
    };

    const handleBack = () => navigate(-1);

    return (
        <div style={{height: "100%"}}>
            departmentName
            <Sidebar name={"Oddział / " + departmentName + " / Sala " + (room?.number ?? "")}/>

            <div className={"department-details-page"} style={{marginTop: "2%"}}>
                <Container fluid className="mt-4" style={{maxWidth: "1200px"}}>
                    <Form>
                        <FormFields
                            form={form}
                            setForm={setForm}
                            fieldLabels={roomFieldLabels}
                            fields={formRoomField}
                        />
                    </Form>

                    {!room?.roomId ? (<div>
                        </div>) :
                        (<div
                                className="mt-4 mb-4 p-3"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    backgroundColor: "white",
                                    maxHeight: "250px",
                                    overflowY: "auto",
                                }}
                            >
                                <h4 className="mb-3">Pacjenci w sali</h4>

                                {patients.length > 0 ? (
                                    <DataTable<PatientDTO>
                                        data={patients}
                                        columns={["name", "surname", "pesel", "birthDate"]}
                                        columnLabels={patientFieldLabels}
                                        onView={undefined}
                                        onDelete={undefined}
                                    />
                                ) : (
                                    <p style={{textAlign: "center"}}>Brak hospitalizowanych pacjentów</p>
                                )}
                            </div>)
                    }


                    <div className="d-flex justify-content-end gap-3 mb-3">
                        <Button variant="secondary" onClick={handleBack}>
                            Wróć
                        </Button>
                        <Button variant="success" onClick={handleSubmit}>
                            {isEdit ? "Zapisz zmiany" : "Dodaj sale"}
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    );
}


export default DepartmentAddPage;