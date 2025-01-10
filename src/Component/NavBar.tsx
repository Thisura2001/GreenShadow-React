import "../Component/NavBar.css"
import {MdDashboardCustomize, MdLibraryBooks} from "react-icons/md";
import {GiJellyBeans} from "react-icons/gi";
import {IoIosLeaf} from "react-icons/io";
import {RiGroupFill} from "react-icons/ri";
import {ImHammer, ImTruck} from "react-icons/im";
import {Link} from "react-router";
export function NavBar(){
    return(
        <>
            <div className="relative">
                <ul id="navBar"
                    className="fixed top-16 left-4 w-56 h-[80vh] p-5 bg-green-500 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0 md:translate-x-0 md:flex md:flex-col hidden md:block">
                    <li className="mb-6">
                        <Link to = "/"
                           className="custom-link">
                           Dashboard  <MdDashboardCustomize className={"custom-size"}/>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to = "/Field"
                           className="custom-link">
                             Field<IoIosLeaf className={"custom-size"} />
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to = "/Crop"
                           className="custom-link">
                            Crop<GiJellyBeans className={"custom-size"}/>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to = "/Staff"
                           className="custom-link">
                             Staff<RiGroupFill className={"custom-size"}/>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to="/Vehicle"
                           className={" custom-link"}>
                            Vehicle<ImTruck className={"custom-size"}/>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to="/Equipment"
                           className="custom-link">
                            Equipment <ImHammer className={"custom-size"}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Log"
                           className="custom-link">
                             Log Service<MdLibraryBooks className={"custom-size"}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}