export default function EquipmentAdd(){
    return(
        <>
            <div id="equipmentFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h4 className="text-lg font-bold">Add Equipment Details</h4>
                    <button id="closeEquipmentForm" className="text-gray-500 hover:text-gray-700 text-xl">X</button>
                </div>
                <form id="equipmentForm" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="equipmentName" className="block text-sm font-medium text-gray-700">Equipment
                                Name</label>
                            <input type="text" id="equipmentName"
                                   className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="Enter equipment name" required/>
                        </div>
                        <div>
                            <label htmlFor="equipmentType"
                                   className="block text-sm font-medium text-gray-700">Type</label>
                            <select id="equipmentType"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required>
                                <option selected disabled value="">Choose type...</option>
                                <option value="ELECTRICAL">ELECTRICAL</option>
                                <option value="MECHANICAL">MECHANICAL</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="equipmentStatus"
                                   className="block text-sm font-medium text-gray-700">Status</label>
                            <select id="equipmentStatus"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required>
                                <option selected disabled value="">Choose status...</option>
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="assignedStaff" className="block text-sm font-medium text-gray-700">Assigned
                                Staff</label>
                            <select id="assignedStaff"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                                <option selected value="N/A">N/A</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="assignedField" className="block text-sm font-medium text-gray-700">Assigned
                                Field</label>
                            <select id="assignedField"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                                <option selected value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button type="submit" id="btnEquipmentSave"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center">
                            Save <i className="fa-regular fa-floppy-disk ml-2"></i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}