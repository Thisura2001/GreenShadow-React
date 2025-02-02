import "../Css/Crop.css"
import {useEffect} from "react";
import HeaderComponent from "../Component/HeaderComponet.tsx";

export default function Crop(){
    useEffect(() => {
        const addCropBtn = document.getElementById("addCropBtn") as HTMLButtonElement;
        const cropCard = document.getElementById("cropFormCard") as HTMLElement;
        const updateCropModal = document.getElementById("updateCropModal") as HTMLElement;
        const closeCropFormBtn = document.getElementById("closeCropForm") as HTMLButtonElement;
        const closeUpdateCropModalBtn = document.getElementById("closeUpdateCropModalBtn") as HTMLButtonElement;

        // Show crop form card
        if (addCropBtn) {
            addCropBtn.addEventListener("click", () => {
                cropCard.style.display = "block";
            });
        }

        // Hide crop form card
        if (closeCropFormBtn) {
            closeCropFormBtn.addEventListener("click", () => {
                cropCard.style.display = "none";
            });
        }

        // Hide update crop modal
        if (closeUpdateCropModalBtn) {
            closeUpdateCropModalBtn.addEventListener("click", () => {
                updateCropModal.style.display = "none";
            });
        }

        // Add event listeners to "Edit" buttons
        const editButtons = document.querySelectorAll(".editCropBtn");
        editButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const target = e.target as HTMLButtonElement;
                const row = target.closest("tr") as HTMLTableRowElement;

                // Get crop data from the table row
                const commonName = row.cells[2].innerText;
                const scientificName = row.cells[3].innerText;
                const category = row.cells[4].innerText;
                const season = row.cells[5].innerText;
                const fieldId = row.cells[6].innerText;

                // Prefill the modal form fields
                (document.getElementById("updateCropCommonName") as HTMLInputElement).value = commonName;
                (document.getElementById("updateCropScientificName") as HTMLInputElement).value = scientificName;
                (document.getElementById("updateCropCategory") as HTMLInputElement).value = category;
                (document.getElementById("updateCropSeason") as HTMLInputElement).value = season;
                (document.getElementById("updateFieldId") as HTMLInputElement).value = fieldId;

                // Show the modal
                updateCropModal.style.display = "flex";
            });
        });
    }, []);

    return(
        <>
            <section id="corp" className="ml-60 p-10">
                <HeaderComponent title={"Crop Management"}>
                    <button
                        id="addCropBtn"
                        className="btn-primary font-bold text-base px-5 py-2 mr-5 bg-blue-600 text-white rounded-lg"
                    >
                        Add New Crop
                    </button>
                </HeaderComponent>
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
                                <button className="editCropBtn text-blue-500 hover:underline mr-3">Edit</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </table>
                </div>
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
            </section>
        </>
    )
}