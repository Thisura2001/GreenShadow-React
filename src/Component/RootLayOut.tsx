import {NavBar} from "./NavBar.tsx";
import {Outlet} from "react-router";

export default function RootLayOut(){
    return(
        <>
            <NavBar/>
            <Outlet></Outlet>
        </>
    )
}