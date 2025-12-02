import {Home, LogOut, User, Folder, IdCardLanyard, Pill, Building2} from "lucide-react";
import './css/Sidebar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink, useLocation} from "react-router-dom";

type SidebarProps = {
    name: string;
};

export const Sidebar = ({name}: SidebarProps) => {

    const location = useLocation();

    const menuItems = [
        {icon: <Home size={18}/>, label: "Home", path: "/home"},
        {icon: <Building2 size={18}/>, label: "Oddziały", path: "/department"},
        {icon: <User size={18}/>, label: "Pacjenci", path: "/patients"},
        {icon: <IdCardLanyard size={18}/>, label: "Personel", path: "/staffs"},
        {icon: <Folder size={18}/>, label: "Hospitalizacja", path: "/hospitalisation"},
        {icon: <Pill size={18}/>, label: "Leki", path: "/drug"},
        {icon: <LogOut size={18}/>, label: "Sign out", path: "/"},
    ];

    return (
        <Navbar expand={"false"} className="my-navbar mb-3">
            <Container fluid>
                <Navbar.Brand href="#">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${false}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                    placement="end"
                    className="offcanvas-narrow"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <div className="sidebar">
                                <nav>
                                    <ul>
                                        {menuItems.map(({icon, label, path}) => {
                                            const isActive = location.pathname === path;
                                            return (
                                                <NavLink className="sidebar-link" to={path}>
                                                    <li key={path} className={isActive ? "active" : ""}>
                                                        {icon}
                                                        <span>{label}</span>
                                                    </li>
                                                </NavLink>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Sidebar;