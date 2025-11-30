import {useEffect, useState} from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {type RoomDTO, roomFieldLabels} from "../dto/RoomDTO";
import {type StaffDTO, staffFieldLabels} from "../dto/StaffDTO";
import {DataTable} from "./DataTabel.tsx";
import {useNavigate} from "react-router-dom";
import type {DepartmentDTO} from "../dto/DepartmentDTO.tsx";
import {removeStaffFromDepartment} from "../service/StaffService.ts";

type DepartmentTabsProps = {
    department?: DepartmentDTO;
};

export const DepartmentTabs = ({ department }: DepartmentTabsProps) => {


    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState<"rooms" | "staff">("rooms");
    const dtoFields: (keyof RoomDTO)[] = ["number", "floor", "bedNumber"];
    const staffColumns: (keyof StaffDTO)[] = ["name", "surname", "specialization", "peselNumber"];
    const [rooms, setRooms] = useState<RoomDTO[]>(department?.rooms ?? []);
    const [staffs, setStaffs] = useState<StaffDTO[]>(department?.staffs ?? []);

    useEffect(() => {
        setRooms(department?.rooms ?? []);
        setStaffs(department?.staffs ?? []);
    }, [department]);

    const handleDelete = () => {
        alert(`Usuwanie działu:`);
    };

    const handleViewRoom = (room: RoomDTO) => {
        navigate("/department/details/rooms", {
            state: {
                room,
                departmentName: department?.departmentName
            }
        });
    };

    const handleAddRoom = () => {
        navigate("/department/details/rooms");
    };

    const handlAsignStaff = () => {
        navigate("/department/details/staffs/add", {
                state: {
                    departmentId: department?.departmentId,
                    departmentName: department?.departmentName
                }
            });
    };

    const handlRemoveStaff = async (staff: StaffDTO) => {
        if (!staff.staffId) return;
        try {
            await removeStaffFromDepartment(staff.staffId);
            setStaffs(prev => prev.filter(x => x.staffId !== staff.staffId));
        } catch (error) {
            console.error(error);
            alert("Nie udało się usunąć pracownika.");
        }
    };

    return (
        <>
            <Nav variant="tabs" activeKey={activeTab}
                 onSelect={(key: string | null) => setActiveTab((key as "rooms" | "staff") ?? "rooms")}>
                <Nav.Item>
                    <Nav.Link eventKey="rooms">Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="staff">Personel</Nav.Link>
                </Nav.Item>
            </Nav>

            <h4 className="mb-3 mt-3">{activeTab === "rooms" ? "Sale oddziału:" : "Perosnel oddziału:"}</h4>

            <div className="d-flex justify-content-end mb-3 mt-1">
                {activeTab === "rooms" && (
                    <Button variant="success" onClick={handleAddRoom} style={{marginRight: "20vh", marginTop: "5vh"}}>Dodaj
                        salę</Button>)}
                {activeTab === "staff" && (
                    <Button variant="success" onClick={handlAsignStaff} style={{marginRight: "20vh", marginTop: "5vh"}}>Przypisz
                        pracownika</Button>)}
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
                        data={staffs}
                        columns={staffColumns}
                        columnLabels={staffFieldLabels}
                        onDelete={handlRemoveStaff}
                    />
                )}
            </div>
        </>
    );
};