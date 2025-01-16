export default function VehicleTable(){
    return(
        <>
            <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-4xl mt-8 overflow-x-auto">
                    <table id="tblVehicle" className="min-w-full border-collapse border border-gray-300">
                        <thead className="bg-teal-600 text-white">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Vehicle Code</th>
                            <th className="px-4 py-2 border border-gray-300">License Plate</th>
                            <th className="px-4 py-2 border border-gray-300">Category</th>
                            <th className="px-4 py-2 border border-gray-300">Fuel Type</th>
                            <th className="px-4 py-2 border border-gray-300">Status</th>
                            <th className="px-4 py-2 border border-gray-300">Staff ID</th>
                            <th className="px-4 py-2 border border-gray-300">Action</th>
                        </tr>
                        </thead>
                        <tbody id="tbodyVehicle" className="text-center">
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">V001</td>
                            <td className="px-4 py-2 border border-gray-300">ABC-1234</td>
                            <td className="px-4 py-2 border border-gray-300">SUV</td>
                            <td className="px-4 py-2 border border-gray-300">Petrol</td>
                            <td className="px-4 py-2 border border-gray-300">AVAILABLE</td>
                            <td className="px-4 py-2 border border-gray-300">STF001</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button className="editCropBtn text-blue-500 hover:underline mr-3">Edit</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}