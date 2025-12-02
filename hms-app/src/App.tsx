import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {Provider} from "react-redux";
import {store} from "./store";
import HmsMainPage from "./page/HmsMainPage.tsx";
import DepartmentManagePage from "./page/DepartmentManagePage.tsx";
import PatientManagePage from "./page/PatientManagePage.tsx";
import DepartmentAddPage from "./page/DepartmentAddPage.tsx";
import RoomAddPage from "./page/RoomAddPage.tsx";
import DepartmentAssignStaffPage from "./page/DepartmentAssignStaffPage.tsx";
import StaffManagePage from "./page/StaffManagePage.tsx";
import SatffAddPage from "./page/SatffAddPage.tsx";
import PatientAddPage from "./page/PatientAddPage.tsx";
import LoginPage from "./page/LoginPage.tsx";
import DrugManagePage from "./page/DrugManagePage.tsx";
import DrugAddPage from "./page/DrugAddPage.tsx";
import PatientHospitalizationPage from "./page/PatientHospitalizationPage.tsx";
import PatientHospitalizationDetailsPage from "./page/PatientHospitalizationDetailsPage.tsx";
import MedicalHistoryAddPage from "./page/MedicalHistoryAddPage.tsx";
import HospitalizaionDrugAddPage from "./page/HospitalizaionDrugAddPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/department",
        element: <DepartmentManagePage/>,
    },
    {
        path: "/department/details",
        element: <DepartmentAddPage/>,
    },
    {
        path: "/department/details/rooms",
        element: <RoomAddPage/>,
    },
    {
        path: "/department/details/staffs/add",
        element: <DepartmentAssignStaffPage/>,
    },
    {
        path: "/staffs",
        element: <StaffManagePage/>,
    },
    {
        path: "/staffs/details",
        element: <SatffAddPage/>,
    },
    {
        path: "/patients",
        element: <PatientManagePage/>,
    },
    {
        path: "/patients/details",
        element: <PatientAddPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/home",
        element: <HmsMainPage/>,
    },
    {
        path: "/drug",
        element: <DrugManagePage/>,
    },
    {
        path: "/drug/details",
        element: <DrugAddPage/>,
    },
    {
        path: "/hospitalisation",
        element: <PatientHospitalizationPage/>
    },
    {
        path: "/hospitalization/details",
        element: <PatientHospitalizationDetailsPage/>
    },
    {
        path: "/hospitalization/details/medical-history/add",
        element: <MedicalHistoryAddPage/>
    },
    {
        path: "/hospitalization/details/drug/add",
        element: <HospitalizaionDrugAddPage/>
    }
]);

function App() {
    const queryClient = new QueryClient();

    return (
        <div>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <RouterProvider router={router}/>
                    </Provider>
                </QueryClientProvider>
            </HelmetProvider>
        </div>
    )
}

export default App
