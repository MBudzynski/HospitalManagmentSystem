import './css/HmsMainPage.css';
import Sidebar from "../component/Sidebar.tsx";
import myImage from '../logo.png';

export const HmsMainPage = () => {

    return (
        <div className="app-root">

            <Sidebar />

            <div className="app-graphic" aria-hidden>
                <img src={myImage} alt="Logo" width={160} height={160}/>
            </div>
        </div>
    )
}

export default HmsMainPage;