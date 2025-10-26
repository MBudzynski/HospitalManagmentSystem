import './css/HmsMainPage.css';
import Sidebar from "../component/Sidebar.tsx";

export const HmsMainPage = () => {

    return (
        <div className="app-root">

            <Sidebar />

            <div className="app-graphic" aria-hidden>
                <svg width="160" height="160" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="60" height="60" rx="10" fill="#1E90FF" />
                    <g transform="translate(8,8)" fill="#fff">
                        <rect x="0" y="0" width="48" height="6" rx="2" />
                        <rect x="0" y="10" width="48" height="6" rx="2" />
                        <rect x="0" y="20" width="32" height="6" rx="2" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default HmsMainPage;