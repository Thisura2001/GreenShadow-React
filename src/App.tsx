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
import { Signup } from "./Pages/SignUp.tsx";
import AuthLayout from "./Component/AuthLyout.tsx";
import {Provider} from "react-redux";
import {store} from "./Store/Store.ts";
import WelcomePage from "./Pages/WelcomePage.tsx";
import SignIn from "./Pages/SignIn.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <AuthLayout />,
            children: [
                { path: "/", element: <WelcomePage /> },
                { path: "/SignIn", element: <SignIn /> },
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
    return  <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
}

export default App;
