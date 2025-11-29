import {useState} from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {type RoomDTO, roomFieldLabels} from "../dto/RoomDTO";
import {type StaffDTO, staffFieldLabels} from "../dto/StaffDTO";
import {DataTable} from "./DataTabel.tsx";
import {useNavigate} from "react-router-dom";

export const DepartmentTabs = () => {

    const [activeTab, setActiveTab] = useState<"rooms" | "staff">("rooms");
    const navigate = useNavigate();
    const dtoFields: (keyof RoomDTO)[] = ["number", "flat", "bedNumber"];

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

    const staff: StaffDTO[] = [
        {
            staffId: 1,
            name: "Jan",
            surname: "Kowalski",
            specialization: "Pielęgniarz",
            peselNumber: "90010112345"
        },
        {
            staffId: 2,
            name: "Anna",
            surname: "Nowak",
            specialization: "Lekarz",
            peselNumber: "82050598765"
        }
    ];

    const handleDelete = () => {
        alert(`Usuwanie działu:`);
    };

    const handleViewRoom = (room: RoomDTO) => {
        navigate("/department/details/rooms", { state: room });
    };

    const handleAddRoom = () => {
        navigate("/department/details/rooms");
    };

    const handlAsignStaff = () => {
        navigate("/department/details/staffs/add");
    };

    const handlRemoveStaff = () => {
        alert(`Usuwanie pracownika z działu:`);
    };

    return (
        <>
            <Nav variant="tabs" activeKey={activeTab} onSelect={(key: string| null) => setActiveTab((key as "rooms" | "staff")?? "rooms")}>
                <Nav.Item>
                    <Nav.Link eventKey="rooms">Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="staff">Personel</Nav.Link>
                </Nav.Item>
            </Nav>

            <div className="d-flex justify-content-end mb-3 mt-3">
                {activeTab === "rooms" && (<Button variant="success" onClick={handleAddRoom} style={{marginRight: "20vh", marginTop: "5vh"}}>Dodaj salę</Button>)}
                {activeTab === "staff" && (<Button variant="success" onClick={handlAsignStaff} style={{marginRight: "20vh", marginTop: "5vh"}}>Przypisz pracownika</Button>)}
            </div>

            <div style={{maxWidth: "80%", margin: "0 auto", maxHeight: "45vh", overflowY: "auto"}}>
                {activeTab === "rooms" && (
                    <DataTable<RoomDTO>
                        data={rooms}
                        columns={dtoFields}
                        columnLabels={roomFieldLabels}
                        onDelete={handleDelete}
                        onView={handleViewRoom}
                    />
                )}

                {activeTab === "staff" && (
                    <DataTable<StaffDTO>
                        data={staff}
                        columns={["name", "surname", "specialization", "peselNumber"]}
                        columnLabels={staffFieldLabels}
                        onDelete={handlRemoveStaff}
                    />
                )}
            </div>
        </>
    );
};