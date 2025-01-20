export default function FieldUpdateCard() {
    return(
        <>
            <div id="updateFieldModal"
                 className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg  w-1/3 max-w-xl z-50 hidden">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-bold text-black mb-4 text-center">Update Field Details</h2>
                    <form id="updateFieldForm" className="space-y-4">
                        <div>
                            <label htmlFor="updateName"
                                   className="block text-sm font-medium text-gray-700">Name:</label>
                            <input type="text" id="updateName" className="mt-1 block w-full border rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="updateLocation"
                                   className="block text-sm font-medium text-gray-700">Location:</label>
                            <input type="text" id="updateLocation"
                                   className="mt-1 block w-full border rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="updateExtent" className="block text-sm font-medium text-gray-700">Extent
                                Size:</label>
                            <input type="text" id="updateExtent"
                                   className="mt-1 block w-full border rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="updateFieldImg1" className="block text-sm font-medium text-gray-700">Field
                                Image 1:</label>
                            <input type="file" id="updateFieldImg1"
                                   className="mt-1 block w-full border rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="updateFieldImg2" className="block text-sm font-medium text-gray-700">Field
                                Image 2:</label>
                            <input type="file" id="updateFieldImg2"
                                   className="mt-1 block w-full border rounded-md p-2"/>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button type="button" id="saveUpdatedField"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Update
                            </button>
                            <button type="button" id="closeUpdateModalBtn"
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}