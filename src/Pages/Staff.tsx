import "../Css/Staff.css"
import {useEffect} from "react";
import StaffHeading from "../Component/StaffComponents/StaffHeading.tsx";
import AddStaffCard from "../Component/StaffComponents/AddStaffCard.tsx";
import StaffTable from "../Component/StaffComponents/StaffTable.tsx";
import UpdateStaff from "../Component/StaffComponents/UpdateStaff.tsx";

export default function Staff(){
    useEffect(() => {
        const addStaffBtn = document.getElementById('addStaffBtn') as HTMLButtonElement;
        const staffFormCard = document.getElementById('staffFormCard') as HTMLElement;
        const updateStaffModel = document.getElementById("updateStaffModal") as HTMLElement;
        const closeUpdateStaffModalBtn = document.getElementById('closeUpdateStaffModalBtn') as HTMLButtonElement;
        const closeAddStaffForm = document.getElementById('closeStaffForm') as HTMLButtonElement;

        if (addStaffBtn) {
            addStaffBtn.addEventListener('click', () => {
                staffFormCard.style.display = 'block';

            });
        }
        if (closeUpdateStaffModalBtn){
            closeUpdateStaffModalBtn.addEventListener('click',()=>{
                updateStaffModel.style.display = 'none';
            })
        }
        if (closeAddStaffForm){
            closeAddStaffForm.addEventListener('click',()=>{
                staffFormCard.style.display = 'none';
            })
        }
        // Add event listeners to "Edit" buttons
        const editButtons = document.querySelectorAll(".editStaffBtn");
        editButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const target = e.target as HTMLButtonElement;
                const row = target.closest("tr") as HTMLTableRowElement;

                // Get staff data from the table row
                const staffId = row.cells[0].innerText;
                const firstName = row.cells[1].innerText;
                const designation = row.cells[2].innerText;
                const gender = row.cells[3].innerText;
                const joinedDate = row.cells[4].innerText;
                const dob = row.cells[5].innerText;
                const contactNo = row.cells[6].innerText;
                const email = row.cells[7].innerText;
                const role = row.cells[8].innerText;
                const city = row.cells[9].innerText;

                // Prefill the modal form fields
                (document.getElementById("updateStaffId") as HTMLInputElement).value = staffId;
                (document.getElementById("updateFirstName") as HTMLInputElement).value = firstName;
                (document.getElementById("updateDesignation") as HTMLInputElement).value = designation;
                (document.getElementById("updateGender") as HTMLSelectElement).value = gender;
                (document.getElementById("updateJoinedDate") as HTMLInputElement).value = joinedDate;
                (document.getElementById("updateDob") as HTMLInputElement).value = dob;
                (document.getElementById("updateContact") as HTMLInputElement).value = contactNo;
                (document.getElementById("updateEmail") as HTMLInputElement).value = email;
                (document.getElementById("updateRole") as HTMLInputElement).value = role;
                (document.getElementById("updateCity") as HTMLInputElement).value = city;

                // Show the modal
                const updateStaffModal = document.getElementById("updateStaffModal") as HTMLDivElement;
                updateStaffModal.style.display = "flex";
            });
        });

    }, []);

    return(
        <>
            <StaffHeading/>
                <div className="card mt-3" id="staffFormCard" style={{ display: 'none' }}>
                    <div className="card-header">
                        <h4>Add Staff Details</h4>
                        <button className="btn-close" id="closeStaffForm">X</button>
                    </div>
                  <AddStaffCard/>
                </div>
                <StaffTable/>
            <UpdateStaff/>
        </>
    )
}