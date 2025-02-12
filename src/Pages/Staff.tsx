import "../Css/Staff.css"
import {FaPlusCircle} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import Staff from "../Model/Staff.ts";
import {saveStaff} from "../Reducer/StaffSlice.ts";

export default function StaffForm(){
    const [id,setId] = useState("");
    const [staffFirstName, setStaffFirstName] = useState("");
    const [designation, setDesignation] = useState("");
    const [staffField, setStaffField] = useState("");
    const [gender, setGender] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [dob, setDob] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [staffEmail, setStaffEmail] = useState("");
    const [role, setRole] = useState("");
    const [city, setCity] = useState("")
    const [fieldList, setFieldList] = useState<any[]>([]);

    const showStaffForm = () => {
        const staffFormCard = document.getElementById("staffFormCard") as HTMLElement;
        if (staffFormCard) {
            staffFormCard.style.display = "block";
        }
    };

    const hideStaffForm = () => {
        const staffFormCard = document.getElementById("staffFormCard") as HTMLElement;
        if (staffFormCard) {
            staffFormCard.style.display = "none";
        }
    };

    const showUpdateStaffModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        const row = target.closest("tr") as HTMLTableRowElement;

        if (row) {
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

            const updateStaffModal = document.getElementById("updateStaffModal") as HTMLElement;
            if (updateStaffModal) {
                updateStaffModal.style.display = "flex";
            }
        }
    };

    const hideUpdateStaffModal = () => {
        const updateStaffModal = document.getElementById("updateStaffModal") as HTMLElement;
        if (updateStaffModal) {
            updateStaffModal.style.display = "none";
        }
    };
    useEffect(() => {
        async function fetchFieldData() {
            try {
                const response = await fetch('http://localhost:8080/field/');
                const data = await response.json();
                setFieldList(data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        }

        fetchFieldData();
    }, []);

    const dispatch = useDispatch<AppDispatch>();


    function handleSave() {
        const newStaff = new Staff(Number(id),staffFirstName,designation,gender,joinedDate,dob,city,contactNo,staffEmail,role,Number(staffField));
        dispatch(saveStaff(newStaff))
    }

    function handleUpdate() {

    }

    return(
        <>
            <h2 className="staff-title">Staff Management...</h2>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary" id="addStaffBtn" onClick={showStaffForm}>Add New
                    Staff <FaPlusCircle/></button>
            </div>
            <div id="staffFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
                    <h4 className="text-lg font-bold">Add Staff Details</h4>
                    <button id="closeStaffForm" className="text-gray-500 hover:text-gray-700 text-xl"
                            onClick={hideStaffForm}>X
                    </button>
                </div>
                <form id="staffForm" className="space-y-6 p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="StaffFirstName" className="block text-sm font-medium text-gray-700">First
                                Name</label>
                            <input
                                type="text"
                                id="StaffFirstName"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter first name"
                                required
                                onChange={(e) => setStaffFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="designation"
                                   className="block text-sm font-medium text-gray-700">Designation</label>
                            <select
                                id="designation"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                onChange={(e) => setDesignation(e.target.value)}
                            >
                                <option selected disabled value="">Choose Designation...</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMINISTRATIVE">ADMIN</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                                <option value="FIELD_WORKER">FIELD WORKER</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="staffField"
                                   className="block text-sm font-medium text-gray-700">Field</label>
                            <select
                                id="staffField"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                onChange={(e) => setStaffField(e.target.value)}
                            >
                                <option selected disabled value="">Select Field...</option>
                                {fieldList.map((field) => (
                                    <option key={field.fieldId} value={field.fieldId}>
                                        {field.fieldId}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                            <select
                                id="gender"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option selected disabled value="">Choose Gender...</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="joinedDate" className="block text-sm font-medium text-gray-700">Joined
                                Date</label>
                            <input
                                type="date"
                                id="joinedDate"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                onChange={(e) => setJoinedDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of
                                Birth</label>
                            <input
                                type="date"
                                id="dob"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact
                                Number</label>
                            <input
                                type="text"
                                id="contactNo"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter contact number"
                                required
                                onChange={(e) => setContactNo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="StaffEmail"
                                   className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="StaffEmail"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter email address"
                                required
                                onChange={(e) => setStaffEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Staff Role</label>
                            <select
                                id="role"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option selected disabled value="">Choose Role...</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="addressLine3"
                                   className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="addressLine3"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="City"
                                required
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            id="btnStaffSave"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </form>
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
                                <label htmlFor="updateFirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input type="text" id="updateFirstName"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter first name"
                                       onChange={(e) => setStaffFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateDesignation" className="block text-sm font-medium text-gray-700">
                                    Designation
                                </label>
                                <input type="text" id="updateDesignation"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter designation"
                                       onChange={(e) => setDesignation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateGender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <select id="updateGender"
                                        className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setGender(e.target.value)}
                                >
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
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       onChange={(e) => setJoinedDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateDob" className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input type="date" id="updateDob"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateContact" className="block text-sm font-medium text-gray-700">
                                    Contact No.
                                </label>
                                <input type="text" id="updateContact"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter contact number"
                                       onChange={(e) => setContactNo(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateEmail" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input type="email" id="updateEmail"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter email"
                                       onChange={(e) => setStaffEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateRole" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <input type="text" id="updateRole"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter role"
                                       onChange={(e) => setRole(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateCity" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input type="text" id="updateCity"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter city"
                                       onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <button id="saveUpdatedStaff"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                                    onClick={handleUpdate}
                            >
                                Update
                            </button>
                            <button id="closeUpdateStaffModalBtn"
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                                    onClick={hideUpdateStaffModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}