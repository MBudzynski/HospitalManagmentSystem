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

const router = createBrowserRouter([
    {
        path: "/",
        element: <HmsMainPage/>,
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
        path: "/patient",
        element: <PatientManagePage/>,
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
