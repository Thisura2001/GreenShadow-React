export default function EquipmentUpdate(){
    return(
        <>
            <div id="updateEquipmentModal"
                 className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Update Equipment Details
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="updateEquipmentName"
                                   className="block text-lg font-medium text-gray-700">
                                Equipment Name
                            </label>
                            <input
                                type="text"
                                id="updateEquipmentName"
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter equipment name"
                            />
                        </div>
                        <div>
                            <label htmlFor="updateEquipmentType"
                                   className="block text-lg font-medium text-gray-700">
                                Type
                            </label>
                            <select
                                id="updateEquipmentType"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="ELECTRICAL">ELECTRICAL</option>
                                <option value="MECHANICAL">MECHANICAL</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="updateEquipmentStatus"
                                   className="block text-lg font-medium text-gray-700">
                                Status
                            </label>
                            <select
                                id="updateEquipmentStatus"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="updateAssignedStaff"
                                   className="block text-lg font-medium text-gray-700">
                                Assigned Staff
                            </label>
                            <select
                                id="updateAssignedStaff"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="updateAssignedField"
                                   className="block text-lg font-medium text-gray-700">
                                Assigned Field
                            </label>
                            <select
                                id="updateAssignedField"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                id="saveUpdatedEquipment"
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                            >
                                Update
                            </button>
                            <button
                                id="closeUpdateEquipmentModalBtn"
                                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
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