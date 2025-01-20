export default function CropUpdateCard(){
    return(
        <>
            <div id="updateCropModal"
                 className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Update Crop Details
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="updateCropCommonName"
                                   className="block text-lg font-medium text-gray-700">
                                Common Name
                            </label>
                            <input type="text" id="updateCropCommonName"
                                   className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                   placeholder="Enter common name"/>
                        </div>
                        <div>
                            <label htmlFor="updateCropScientificName"
                                   className="block text-lg font-medium text-gray-700">
                                Scientific Name
                            </label>
                            <input type="text" id="updateCropScientificName"
                                   className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                   placeholder="Enter scientific name"/>
                        </div>
                        <div>
                            <label htmlFor="updateCropCategory" className="block text-lg font-medium text-gray-700">
                                Category
                            </label>
                            <input type="text" id="updateCropCategory"
                                   className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                   placeholder="Enter category"/>
                        </div>
                        <div>
                            <label htmlFor="updateCropSeason" className="block text-lg font-medium text-gray-700">
                                Season
                            </label>
                            <input type="text" id="updateCropSeason"
                                   className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                   placeholder="Enter season"/>
                        </div>
                        <div>
                            <label htmlFor="updateFieldId" className="block text-lg font-medium text-gray-700">
                                Field ID
                            </label>
                            <input type="text" id="updateFieldId"
                                   className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                   placeholder="Enter field ID"/>
                        </div>
                        <div>
                            <label htmlFor="updateCropImg1" className="block text-lg font-medium text-gray-700">
                                Crop Image
                            </label>
                            <input type="file" id="updateCropImg1"
                                   className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                   accept="image/*"/>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button id="saveUpdatedCrop"
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                                Update
                            </button>
                            <button id="closeUpdateCropModalBtn"
                                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}