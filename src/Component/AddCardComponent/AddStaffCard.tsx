export default function AddStaffCard(){
    return(
        <>
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
        </>
    )
}