import "../Css/Staff.css"
import {useEffect} from "react";
import Heading from "../Component/StaffComponents/Heading.tsx";
import AddStaffCard from "../Component/StaffComponents/AddStaffCard.tsx";
import StaffTable from "../Component/StaffComponents/StaffTable.tsx";

export default function Staff(){
    useEffect(() => {
        const addStaffBtn = document.getElementById('addStaffBtn') as HTMLButtonElement;
        const staffFormCard = document.getElementById('staffFormCard') as HTMLElement;

        if (addStaffBtn) {
            addStaffBtn.addEventListener('click', () => {
                staffFormCard.style.display = 'block';
            });
        }
    }, []);

    return(
        <>
            <Heading/>
                <div className="card mt-3" id="staffFormCard" style={{ display: 'none' }}>
                    <div className="card-header">
                        <h4>Add Staff Details</h4>
                        <button className="btn-close" id="closeStaffForm" onClick={()=>(staffFormCard.style.display = 'none')}>X</button>
                    </div>
                  <AddStaffCard/>
                </div>
                <StaffTable/>
        </>
    )
}