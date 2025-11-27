import Sidebar from "../component/Sidebar.tsx";
import logo from '../logo.png';

export const HmsMainPage = () => {

    return (
        <div
            style={{
                width: "98hv",
                height: "92vh",
                backgroundImage: `url(${logo})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Sidebar name="Hospital Management System"></Sidebar>
        </div>
    )
}

export default HmsMainPage;