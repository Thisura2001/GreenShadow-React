export default function VehicleAddCard(){
    return(
        <>
            <div id="vehicleFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h4 className="text-xl font-bold text-gray-800">Add Vehicle Details</h4>
                    <button id="closeVehicleForm" className="text-gray-400 hover:text-red-500 text-xl">X</button>
                </div>
                <form id="vehicleForm" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">License
                                Plate</label>
                            <input type="text" id="licensePlate"
                                   className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                   placeholder="Enter license plate" required/>
                        </div>
                        <div>
                            <label htmlFor="category"
                                   className="block text-sm font-medium text-gray-700">Category</label>
                            <select id="category"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    required>
                                <option value="" selected disabled>Choose category...</option>
                                <option value="SUV">SUV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Truck">Truck</option>
                                <option value="Van">Van</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">Fuel
                                Type</label>
                            <select id="fuelType"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    required>
                                <option value="" selected disabled>Choose fuel type...</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="status"
                                   className="block text-sm font-medium text-gray-700">Status</label>
                            <select id="status"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    required>
                                <option value="" selected disabled>Choose status...</option>
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="VehicleStaffId" className="block text-sm font-medium text-gray-700">Staff
                                ID</label>
                            <select id="VehicleStaffId"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    required>
                                <option value="" selected disabled>Select Staff...</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <button id="btnVehicleSave" type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}