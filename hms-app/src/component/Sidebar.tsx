import {Home, LogOut, File, User, Folder, IdCardLanyard} from "lucide-react";
import {NavLink, useLocation } from "react-router-dom";
import './css/Sidebar.css';

export const Sidebar = () => {

    const location = useLocation();

    const menuItems = [
        { icon: <Home size={18} />, label: "Oddziały", path: "/department" },
        { icon: <User size={18} />, label: "Pacjenci", path: "/patient" },
        { icon: <IdCardLanyard size={18} />, label: "Personel", path: "/staff" },
        { icon: <Folder size={18} />, label: "Historia leczenia", path: "/history" },
        { icon: <File size={18} />, label: "Dokumenty", path: "/documents" },
        { icon: <LogOut size={18} />, label: "Sign out", path: "/logout" },
    ];

    return (
        <aside className="sidebar">
            <div className="logo">Hospital Management System</div>
            <nav>
                <ul>
                    {menuItems.map(({ icon, label, path }) => {
                        const isActive = location.pathname === path;
                        return (
                            <li key={path} className={isActive ? "active" : ""}>
                                {icon}
                                <NavLink className="sidebar-link" to={path}>
                                    <span>{label}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;