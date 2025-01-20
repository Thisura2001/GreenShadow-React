export default function VehicleUpdate(){
    return(
        <>
            <div
                id="updateVehicleModal"
                className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            >
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Update Vehicle Details
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="updateVehicleLicensePlate"
                                   className="block text-lg font-medium text-gray-700">
                                License Plate
                            </label>
                            <input
                                type="text"
                                id="updateVehicleLicensePlate"
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter license plate"
                            />
                        </div>
                        <div>
                            <label htmlFor="updateVehicleCategory"
                                   className="block text-lg font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="updateVehicleCategory"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="" selected disabled>
                                    Choose category...
                                </option>
                                <option value="SUV">SUV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Truck">Truck</option>
                                <option value="Van">Van</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="updateVehicleFuelType"
                                   className="block text-lg font-medium text-gray-700">
                                Fuel Type
                            </label>
                            <select
                                id="updateVehicleFuelType"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="" selected disabled>
                                    Choose fuel type...
                                </option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="updateVehicleStatus"
                                   className="block text-lg font-medium text-gray-700">
                                Status
                            </label>
                            <select
                                id="updateVehicleStatus"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="" selected disabled>
                                    Choose status...
                                </option>
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="updateVehicleStaffId"
                                   className="block text-lg font-medium text-gray-700">
                                Staff ID
                            </label>
                            <select
                                id="updateVehicleStaffId"
                                className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="" selected disabled>
                                    Select Staff...
                                </option>
                            </select>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                id="saveUpdatedVehicle"
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                            >
                                Update
                            </button>
                            <button
                                id="closeUpdateVehicleModalBtn"
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