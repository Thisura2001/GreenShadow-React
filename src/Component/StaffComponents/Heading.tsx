import {FaPlusCircle} from "react-icons/fa";

export default function Heading(){
    return(
        <>
            <h2 className="staff-title">Staff Management...</h2>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary" id="addStaffBtn">Add New Staff <FaPlusCircle/></button>
            </div>
        </>
    )
}