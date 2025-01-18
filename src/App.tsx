import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Component/RootLayOut.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import Field from "./Pages/Field.tsx";
import Crop from "./Pages/Crop.tsx";
import Log from "./Pages/Log.tsx";
import Staff from "./Pages/Staff.tsx";
import Equipment from "./Pages/Equipment.tsx";
import Vehicle from "./Pages/Vehicle.tsx";
import SignIn from "./Pages/SignIn.tsx";
import { Signup } from "./Pages/SignUp.tsx";
import AuthLayout from "./Component/AuthLyout.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <AuthLayout />,
            children: [
                { path: "/", element: <SignIn /> },
                { path: "/signUp", element: <Signup /> },
            ],
        },
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "/Dashboard", element: <Dashboard /> },
                { path: "/Field", element: <Field /> },
                { path: "/Crop", element: <Crop /> },
                { path: "/Log", element: <Log /> },
                { path: "/Staff", element: <Staff /> },
                { path: "/Equipment", element: <Equipment /> },
                { path: "/Vehicle", element: <Vehicle /> },
            ],
        },
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
