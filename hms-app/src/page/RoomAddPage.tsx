import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentAddPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {type RoomDTO, roomFieldLabels} from "../dto/RoomDTO.tsx";
import {FormFields} from "../component/FormFields.tsx";
import {DataTable} from "../component/DataTabel.tsx";
import {type PatientDTO, patientFieldLabels} from "../dto/PatientDTO.tsx";

export const DepartmentAddPage = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const room = location.state as RoomDTO | undefined;
    const isEdit = !!room;

    const [form, setForm] = useState<RoomDTO>({
        roomId: room?.roomId ?? 0,
        number: room?.number ?? "",
        flat: room?.flat ?? 1,
        bedNumber: room?.bedNumber ?? 1,
    });

    const patients: PatientDTO[] = [
        {
            patientId: 1,
            name: "Jan",
            surname: "Kowalski",
            gender: "Mężczyzna",
            phone: "123-456-789",
            email: "jan.kowalski@example.com",
            street: "ul. Słoneczna",
            city: "Warszawa",
            houseNumber: "12A",
            postalCode: "00-123",
            pesel: "90051212345",
            birthDate: "1990-05-12",
        },
        {
            patientId: 2,
            name: "Anna",
            surname: "Nowak",
            gender: "Kobieta",
            phone: "987-654-321",
            email: "anna.nowak@example.com",
            street: "ul. Kwiatowa",
            city: "Kraków",
            houseNumber: "5B",
            postalCode: "31-456",
            pesel: "85010154321",
            birthDate: "1985-01-01",
        }
    ];

    const handleSubmit = () => {
        if (isEdit) {
            console.log("Edycja pokoju:", form);
        } else {
            console.log("Dodawanie nowego pokoju:", form);
        }
    };

    const handleBack = () => navigate(-1);

    return (
        <div  style={{height: "100%"}}>
            <Sidebar name={isEdit ? "Oddział / hoooh":  "Oddział / Dodaj / Sala"}/>

            <div className={"department-details-page"} style={{marginTop: "2%"}}>
                <Container fluid className="mt-4" style={{maxWidth: "1200px"}}>
                        <Form>
                            <FormFields
                                form={form}
                                setForm={setForm}
                                fieldLabels={roomFieldLabels}
                            />
                        </Form>

                    <div
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
                            <DataTable
                                data={patients}
                                columns={["name", "surname", "pesel", "birthDate"]}
                                columnLabels={patientFieldLabels}
                                onView={undefined}
                                onDelete={undefined}
                            />
                        ) : (
                            <p style={{ color: "#888", fontStyle: "italic" }}>Brak pacjentów</p>
                        )}
                    </div>

                    <div className="d-flex justify-content-end gap-3 mb-3">
                        <Button variant="secondary" onClick={handleBack}>
                            Wróć
                        </Button>
                        <Button variant="success" onClick={handleSubmit}>
                            {isEdit ? "Zapisz zmiany" : "Dodaj pokój"}
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    );
}


export default DepartmentAddPage;