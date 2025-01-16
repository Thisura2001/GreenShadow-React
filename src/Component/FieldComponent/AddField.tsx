

export default function AddField(){

    return(
        <>
            <div id="fieldFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h4 className="text-lg font-bold">Add Field Details</h4>
                    <button id="closeFieldForm" className="text-gray-500 hover:text-gray-700 text-xl">X</button>
                </div>
                <form id="FieldFormCard" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="fieldName" className="block text-sm font-medium text-gray-700">Field
                                Name</label>
                            <input type="text" id="fieldName" className="mt-1 block w-full border rounded-md p-2"
                                   placeholder="Enter Field name" required/>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Field
                                Location</label>
                            <input type="text" id="location" className="mt-1 block w-full border rounded-md p-2"
                                   placeholder="Enter Field Location" required/>
                        </div>
                        <div>
                            <label htmlFor="extent" className="block text-sm font-medium text-gray-700">Field
                                Extent</label>
                            <input type="text" id="extent" className="mt-1 block w-full border rounded-md p-2"
                                   placeholder="Enter Field Extent" required/>
                        </div>
                        <div>
                            <label htmlFor="fieldImg01" className="block text-sm font-medium text-gray-700">Field
                                Image 01</label>
                            <input type="file" id="fieldImg01" className="mt-1 block w-full border rounded-md p-2"
                                   accept="image/*"/>
                            <div id="fieldImgPreview01" className="mt-2"></div>
                        </div>
                        <div>
                            <label htmlFor="fieldImg02" className="block text-sm font-medium text-gray-700">Field
                                Image 02</label>
                            <input type="file" id="fieldImg02" className="mt-1 block w-full border rounded-md p-2"
                                   accept="image/*"/>
                            <div id="fieldImgPreview02" className="mt-2"></div>
                        </div>
                    </div>
                    <button type="submit" id="fieldSaveBtn"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Save <i className="fa-regular fa-floppy-disk"></i>
                    </button>
                </form>
            </div>
        </>
    )
}