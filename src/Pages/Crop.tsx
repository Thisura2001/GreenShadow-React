import "../Css/Crop.css"
import {useEffect} from "react";

export default function Crop(){
    useEffect(() => {
        const addCropBtn = document.getElementById("addCropBtn") as HTMLButtonElement;
        const cropCard = document.getElementById("cropFormCard") as HTMLElement;

        if (addCropBtn) {
            addCropBtn.addEventListener("click", () => {
                cropCard.style.display = "block";
            });
        }
        const closeCropFormBtn = document.getElementById("closeCropForm") as HTMLButtonElement;
        if (closeCropFormBtn) {
            closeCropFormBtn.addEventListener("click", () => {
                cropCard.style.display = "none";
            });
        }
    }, []);
    return(
        <>
            <section id="corp" className="ml-60 p-10">
                <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-70px] text-green-600 animate-fade-in">
                    Crop Management
                </h2>
                <div className="flex justify-end mb-6">
                    <button id="addCropBtn" className="btn-primary font-bold text-base px-5 py-2 mr-5 bg-blue-600 text-white rounded-lg">Add New Crop</button>
                </div>
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
                                <button type="submit" id="cropSaveBtn" className="btn-success w-full mt-4">Save
                                    <i className="fa-regular fa-floppy-disk"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="corpCardsContainer"
                     className="grid gap-10 mt-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"></div>
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
                                <button className="text-blue-500 hover:underline mr-3">Edit</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="updateCropModal"
                     className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-green-100 p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-2xl font-bold text-center text-green-700 mb-4">Update Crop Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="updateCropCommonName" className="block font-medium text-black">Common
                                    Name</label>
                                <input type="text" id="updateCropCommonName" className="form-input"/>
                            </div>
                            <div>
                                <label htmlFor="updateCropScientificName" className="block font-medium text-black">Scientific
                                    Name</label>
                                <input type="text" id="updateCropScientificName" className="form-input"/>
                            </div>
                            <div>
                                <label htmlFor="updateCropCategory"
                                       className="block font-medium text-black">Category</label>
                                <input type="text" id="updateCropCategory" className="form-input"/>
                            </div>
                            <div>
                                <label htmlFor="updateCropSeason"
                                       className="block font-medium text-black">Season</label>
                                <input type="text" id="updateCropSeason" className="form-input"/>
                            </div>
                            <div>
                                <label htmlFor="updateFieldId" className="block font-medium text-black">Field ID</label>
                                <input type="text" id="updateFieldId" className="form-input"/>
                            </div>
                            <div>
                                <label htmlFor="updateCropImg1" className="block font-medium text-black">Crop
                                    Image</label>
                                <input type="file" id="updateCropImg1" className="form-input" accept="image/*"/>
                            </div>
                            <div className="flex justify-end gap-4 mt-6">
                                <button id="saveUpdatedCrop" className="btn-success">Update</button>
                                <button id="closeUpdateCropModalBtn" className="btn-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}