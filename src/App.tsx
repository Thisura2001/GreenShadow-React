
import {createBrowserRouter} from "react-router";
import RootLayOut from "./Component/RootLayOut.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import Field from "./Pages/Field.tsx";
import Crop from "./Pages/Crop.tsx";
import Log from "./Pages/Log.tsx";
import Staff from "./Pages/Staff.tsx";
import Equipment from "./Pages/Equipment.tsx";
import Vehicle from "./Pages/Vehicle.tsx";
import {RouterProvider} from "react-router/dom";


function App() {
    const routes = createBrowserRouter([
        {
            path: " ",
            element:<RootLayOut/>,
            children:[
                {path:'',element:<Dashboard/>},
                {path:'',element:<Field/>},
                {path:'',element:<Crop/>},
                {path:'',element:<Log/>},
                {path:'',element:<Staff/>},
                {path:'',element:<Equipment/>},
                {path:'',element:<Vehicle/>},
            ]
        }
    ])
  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
