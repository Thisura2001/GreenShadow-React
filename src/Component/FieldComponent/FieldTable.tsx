export default function FieldTable(){
    return(
        <>
            <div className="mt-10 overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="py-3 px-6 border-b">Field ID</th>
                        <th className="py-3 px-6 border-b">Field Name</th>
                        <th className="py-3 px-6 border-b">Location</th>
                        <th className="py-3 px-6 border-b">Extent</th>
                        <th className="py-3 px-6 border-b">Image 1</th>
                        <th className="py-3 px-6 border-b">Image 2</th>
                        <th className="py-3 px-6 border-b">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="FieldTableBody" className="bg-white">
                    {/* Example Row */}
                    <tr>
                        <td className="py-3 px-6 border-b">F001</td>
                        <td className="py-3 px-6 border-b">Green Field</td>
                        <td className="py-3 px-6 border-b">California</td>
                        <td className="py-3 px-6 border-b">10 Acres</td>
                        <td className="py-3 px-6 border-b">
                            <img src="https://via.placeholder.com/50" alt="Image 1"
                                 className="w-12 h-12 object-cover"/>
                        </td>
                        <td className="py-3 px-6 border-b">
                            <img src="https://via.placeholder.com/50" alt="Image 2"
                                 className="w-12 h-12 object-cover"/>
                        </td>
                        <td className="py-3 px-6 border-b">
                            <button className="editFieldBtn text-blue-500 hover:underline mr-3">Edit</button>
                            <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}