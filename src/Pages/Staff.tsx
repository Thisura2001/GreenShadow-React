import "../Css/Staff.css"
import {FaPlusCircle} from "react-icons/fa";
import {useEffect} from "react";

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
            <section id="staff">
                <h2 className="field-title">Staff Management...
                </h2>
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-primary" id="addStaffBtn">Add New Staff <FaPlusCircle/></button>
                </div>
                <div className="card mt-3" id="staffFormCard" style={{ display: 'none' }}>
                    <div className="card-header">
                        <h4>Add Staff Details</h4>
                        <button className="btn-close" id="closeStaffForm" onClick={()=>(staffFormCard.style.display = 'none')}>X</button>
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
                                <button type="submit" className="bg-amber-400 mt-3 text-white p-3 rounded-md "
                                        id="btnStaffUpdate">Update
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
                            <th>Delete</th>
                            <th>Update</th>
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
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-warning btn-sm">Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ST-002</td>
                            <td>Jane</td>
                            <td>Developer</td>
                            <td>Female</td>
                            <td>2021-08-12</td>
                            <td>1990-07-22</td>
                            <td>+1 987 654 321</td>
                            <td>jane@example.com</td>
                            <td>User</td>
                            <td>Los Angeles</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-warning btn-sm">Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ST-003</td>
                            <td>Mark</td>
                            <td>Designer</td>
                            <td>Male</td>
                            <td>2019-11-23</td>
                            <td>1988-11-02</td>
                            <td>+1 555 666 777</td>
                            <td>mark@example.com</td>
                            <td>User</td>
                            <td>Chicago</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-warning btn-sm">Update</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}