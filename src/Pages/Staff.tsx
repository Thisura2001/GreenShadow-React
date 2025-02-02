import "../Css/Staff.css"
import {useEffect} from "react";
import StaffHeading from "../Component/StaffComponents/StaffHeading.tsx";

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
            <div className="card mt-3" id="staffFormCard" style={{display: 'none'}}>
                <div className="card-header">
                    <h4>Add Staff Details</h4>
                    <button className="btn-close" id="closeStaffForm">X</button>
                </div>
                <div className="card-body">
                    <form id="staffForm">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="StaffFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="StaffFirstName"
                                       placeholder="Enter first name" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="designation" className="form-label">Designation</label>
                                <select className="form-select" id="designation" required>
                                    <option selected disabled value="">Choose Designation.</option>
                                    <option value="MANAGER">MANAGER</option>
                                    <option value="ADMINISTRATIVE">ADMIN</option>
                                    <option value="SCIENTIST">SCIENTIST</option>
                                    <option value="FIELD_WORKER">FIELD_WORKER</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="staffField" className="form-label">Field</label>
                                <select className="form-select" id="staffField" required>
                                    <option selected disabled value="">Select field...</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-select" id="gender" required>
                                    <option selected disabled value="">Choose Gender...</option>
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="joinedDate" className="form-label">Joined Date</label>
                                <input type="date" className="form-control" id="joinedDate" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="dob" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contactNo" className="form-label">Contact Number</label>
                                <input type="text" className="form-control" id="contactNo"
                                       placeholder="Enter contact number" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="StaffEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="StaffEmail"
                                       placeholder="Enter email address" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="role" className="form-label">Staff Role</label>
                                <select className="form-select" id="role" required>
                                    <option selected disabled value="">Choose Role...</option>
                                    <option value="MANAGER">MANAGER</option>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="SCIENTIST">SCIENTIST</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="addressLine3" className="form-label">City</label>
                                <input type="text" className="form-control" id="addressLine3" placeholder="City"
                                       required/>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <button type="submit" className="bg-blue-600 mt-3 text-white p-3 rounded-md "
                                    id="btnStaffSave">Save
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="table-responsive mt-4">
                <table className="table table-bordered table-striped" id="tblStaff">
                    <thead className="table-primary">
                    <tr>
                        <th>Staff ID</th>
                        <th>First Name</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Joined Date</th>
                        <th>DOB</th>
                        <th>Contact No.</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody id="staffTbody">
                    <tr>
                        <td>ST-001</td>
                        <td>John</td>
                        <td>Manager</td>
                        <td>Male</td>
                        <td>2020-05-01</td>
                        <td>1985-03-15</td>
                        <td>+1 234 567 890</td>
                        <td>john@example.com</td>
                        <td>Admin</td>
                        <td>New York</td>
                        <td>
                            <button className="editStaffBtn text-blue-500 hover:underline mr-3">Edit</button>
                            <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div id="updateStaffModal"
                 className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-xl w-full">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            Update Staff Details
                        </h3>
                        <div
                            className="space-y-4 overflow-y-auto max-h-[70vh] px-2"
                        >
                            <div>
                                <label htmlFor="updateStaffId" className="block text-sm font-medium text-gray-700">
                                    Staff ID
                                </label>
                                <input type="text" id="updateStaffId"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter staff ID"/>
                            </div>
                            <div>
                                <label htmlFor="updateFirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input type="text" id="updateFirstName"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter first name"/>
                            </div>
                            <div>
                                <label htmlFor="updateDesignation" className="block text-sm font-medium text-gray-700">
                                    Designation
                                </label>
                                <input type="text" id="updateDesignation"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter designation"/>
                            </div>
                            <div>
                                <label htmlFor="updateGender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <select id="updateGender"
                                        className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateJoinedDate" className="block text-sm font-medium text-gray-700">
                                    Joined Date
                                </label>
                                <input type="date" id="updateJoinedDate"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="updateDob" className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input type="date" id="updateDob"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="updateContact" className="block text-sm font-medium text-gray-700">
                                    Contact No.
                                </label>
                                <input type="text" id="updateContact"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter contact number"/>
                            </div>
                            <div>
                                <label htmlFor="updateEmail" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input type="email" id="updateEmail"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter email"/>
                            </div>
                            <div>
                                <label htmlFor="updateRole" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <input type="text" id="updateRole"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter role"/>
                            </div>
                            <div>
                                <label htmlFor="updateCity" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input type="text" id="updateCity"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter city"/>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <button id="saveUpdatedStaff"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                Update
                            </button>
                            <button id="closeUpdateStaffModalBtn"
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}