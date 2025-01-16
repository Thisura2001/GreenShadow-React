export default function UpdateStaff() {
    return (
        <>
            <div id="updateStaffModal"
                 className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-xl w-full">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            Update Staff Details
                        </h3>
                        <div
                            className="space-y-4 overflow-y-auto max-h-[70vh] px-2"
                        >
                            <div>
                                <label htmlFor="updateStaffId" className="block text-sm font-medium text-gray-700">
                                    Staff ID
                                </label>
                                <input type="text" id="updateStaffId"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter staff ID"/>
                            </div>
                            <div>
                                <label htmlFor="updateFirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input type="text" id="updateFirstName"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter first name"/>
                            </div>
                            <div>
                                <label htmlFor="updateDesignation" className="block text-sm font-medium text-gray-700">
                                    Designation
                                </label>
                                <input type="text" id="updateDesignation"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter designation"/>
                            </div>
                            <div>
                                <label htmlFor="updateGender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <select id="updateGender"
                                        className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateJoinedDate" className="block text-sm font-medium text-gray-700">
                                    Joined Date
                                </label>
                                <input type="date" id="updateJoinedDate"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="updateDob" className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input type="date" id="updateDob"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="updateContact" className="block text-sm font-medium text-gray-700">
                                    Contact No.
                                </label>
                                <input type="text" id="updateContact"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter contact number"/>
                            </div>
                            <div>
                                <label htmlFor="updateEmail" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input type="email" id="updateEmail"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter email"/>
                            </div>
                            <div>
                                <label htmlFor="updateRole" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <input type="text" id="updateRole"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter role"/>
                            </div>
                            <div>
                                <label htmlFor="updateCity" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input type="text" id="updateCity"
                                       className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter city"/>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <button id="saveUpdatedStaff"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                Update
                            </button>
                            <button id="closeUpdateStaffModalBtn"
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
