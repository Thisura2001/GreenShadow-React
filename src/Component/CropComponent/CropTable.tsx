export default function CropTable(){
    return(
        <>
            <div className="mt-10 overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="py-3 px-6 border-b">Crop ID</th>
                        <th className="py-3 px-6 border-b">Crop Img</th>
                        <th className="py-3 px-6 border-b">Common Name</th>
                        <th className="py-3 px-6 border-b">Scientific Name</th>
                        <th className="py-3 px-6 border-b">Category</th>
                        <th className="py-3 px-6 border-b">Season</th>
                        <th className="py-3 px-6 border-b">Field ID</th>
                        <th className="py-3 px-6 border-b">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="cropTableBody" className="bg-white"></tbody>
                    <tr>
                        <td className="py-3 px-6 border-b">C-101</td>
                        <td className="py-3 px-6 border-b">
                            <img
                                src="../assets/farmer.jpg"
                                alt="Crop"
                                className="w-12 h-12 object-cover rounded"
                            />
                        </td>
                        <td className="py-3 px-6 border-b">Wheat</td>
                        <td className="py-3 px-6 border-b">Triticum aestivum</td>
                        <td className="py-3 px-6 border-b">Cereal</td>
                        <td className="py-3 px-6 border-b">Winter</td>
                        <td className="py-3 px-6 border-b">F-201</td>
                        <td className="py-3 px-6 border-b">
                            <button className="editCropBtn text-blue-500 hover:underline mr-3">Edit</button>
                            <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}