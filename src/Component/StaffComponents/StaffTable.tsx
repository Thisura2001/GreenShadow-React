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
        </>
    )
}