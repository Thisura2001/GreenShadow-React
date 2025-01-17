export default function EquipmentTable(){
    return(
        <>
            <div className="mt-10 overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left">
                    <thead className="bg-teal-600 text-white">
                    <tr>
                        <th className="py-3 px-6 border-b">Equipment ID</th>
                        <th className="py-3 px-6 border-b">Equipment Name</th>
                        <th className="py-3 px-6 border-b">Type</th>
                        <th className="py-3 px-6 border-b">Status</th>
                        <th className="py-3 px-6 border-b">Staff</th>
                        <th className="py-3 px-6 border-b">Field</th>
                        <th className="py-3 px-6 border-b">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="EquipmentTableBody" className="bg-white">
                    {/* Example Row */}
                    <tr>
                        <td className="py-3 px-6 border-b">E001</td>
                        <td className="py-3 px-6 border-b">Tractor</td>
                        <td className="py-3 px-6 border-b">Heavy Machinery</td>
                        <td className="py-3 px-6 border-b">Available</td>
                        <td className="py-3 px-6 border-b">S001</td>
                        <td className="py-3 px-6 border-b">F001</td>

                        <td className="py-3 px-6 border-b">
                            <button className="editEquipmentBtn text-blue-500 hover:underline mr-3">Edit</button>
                            <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}