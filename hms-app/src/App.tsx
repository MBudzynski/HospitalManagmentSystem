import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {Provider} from "react-redux";
import {store} from "./store";
import HmsMainPage from "./page/HmsMainPage.tsx";
import DepartmentManagePage from "./page/DepartmentManagePage.tsx";
import PatientManagePage from "./page/PatientManagePage.tsx";

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
        path: "/patient",
        element: <PatientManagePage/>,
    }
]);

function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
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
