export default function StaffTable(){
    return(
        <>
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
        </>
    )
}