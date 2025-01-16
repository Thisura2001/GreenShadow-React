export default function CropAddCard(){
    return(
        <>
            <div id="cropFormCard" className="hidden max-w-3xl mx-auto rounded-lg shadow-lg mt-3 bg-white">
                <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
                    <h4 id="cropFormTitle">Crop Details</h4>
                    <button id="closeCropForm" className="text-white">X</button>
                </div>
                <div className="p-6">
                    <form id="cropForm" className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="cropCommonName" className="block text-sm font-medium text-purple-700">Crop
                                Common Name</label>
                            <input type="text" id="cropCommonName" className="form-input"
                                   placeholder="Enter common name" required/>
                        </div>
                        <div>
                            <label htmlFor="cropScientificName"
                                   className="block text-sm font-medium text-purple-700">Crop Scientific
                                Name</label>
                            <input type="text" id="cropScientificName" className="form-input"
                                   placeholder="Enter scientific name" required/>
                        </div>
                        <div>
                            <label htmlFor="cropImageFile" className="block text-sm font-medium text-purple-700">Upload
                                Crop Image</label>
                            <input type="file" id="cropImageFile" className="form-input" accept="image/*"/>
                        </div>
                        <div>
                            <label htmlFor="cropCategory"
                                   className="block text-sm font-medium text-purple-700">Category</label>
                            <input type="text" id="cropCategory" className="form-input" placeholder="Enter category"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="cropSeason" className="block text-sm font-medium text-purple-700">Crop
                                Season</label>
                            <input type="text" id="cropSeason" className="form-input" placeholder="Enter season"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="fieldIdInCrop" className="block text-sm font-medium text-purple-700">Field
                                ID</label>
                            <select id="fieldIdInCrop" className="form-select" required>
                                <option selected disabled value="">Select Field...</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" id="cropSaveBtn"
                                    className="btn-success w-full mt-4 bg-green-600 text-white p-1 rounded-lg">Save
                                <i className="fa-regular fa-floppy-disk"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}