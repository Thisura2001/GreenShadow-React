import "../Css/Crop.css"
import {useEffect, useState} from "react";
import HeaderComponent from "../Component/HeaderComponet.tsx";
import {toBase64} from "../Reducer/FiledSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import Crop from "../Model/Crop.ts";
import {saveCrop} from "../Reducer/CropSlice.ts";

export default function CropForm(){
    const [cropId,setCropId] = useState("");
    const [commonName,setCommonName] = useState("");
    const [scientificName,setScientificName] = useState("");
    const [cropImg,setCropImg] = useState("");
    const [category,setCategory] = useState("");
    const [season,setSeason] = useState("");
    const [field,setField] = useState("");
    const [fieldList, setFieldList] = useState<any[]>([]);

    useEffect(() => {
        async function fetchFieldData() {
            try {
                const response = await fetch('http://localhost:8080/field/');
                const data = await response.json();
                setFieldList(data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        }

        fetchFieldData();
    }, []);
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
                const cropId = row.cells[0].innerText;
                const commonName = row.cells[1].innerText;
                const scientificName = row.cells[2].innerText;
                const cropImg = row.cells[3].innerText;
                const category = row.cells[4].innerText;
                const season = row.cells[5].innerText;
                const fieldId = row.cells[6].innerText;

                setCropId(cropId);
                setCommonName(commonName)
                setScientificName(scientificName)
                setCropImg(cropImg)
                setCategory(category)
                setSeason(season)
                setField(fieldId)

                // Show the modal
                updateCropModal.style.display = "flex";
            });
        });
    }, []);
    const dispatch = useDispatch<AppDispatch>();
    const crops = useSelector(state => state.crops)
    const handleImageChange1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            try {
                const base64Image = await toBase64(file);
                setCropImg(base64Image);

                const previewElement = document.getElementById("fieldImgPreview01");
                if (previewElement) {
                    previewElement.innerHTML = `<img src="${base64Image}" alt="Field Image 01" class="w-full h-auto mt-2" />`;
                }
            } catch (error) {
                console.error("Error converting image to base64: ", error);
            }
        }
    }
    function handleSave() {
        const newCrop = new Crop(Number(cropId),commonName,scientificName,cropImg,category,season,Number(field))
        dispatch(saveCrop(newCrop))
    }

    function handleUpdate() {

    }


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
                                <input type="text" id="cropCommonName"
                                       className="form-input"
                                       placeholder="Enter common name" required
                                       value={commonName}
                                       onChange={(e) => setCommonName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="cropScientificName"
                                       className="block text-sm font-medium text-purple-700">Crop Scientific
                                    Name</label>
                                <input type="text" id="cropScientificName"
                                       className="form-input"
                                       placeholder="Enter scientific name"
                                       value={scientificName}
                                       onChange={(e) => setScientificName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="cropImageFile" className="block text-sm font-medium text-purple-700">Upload
                                    Crop Image</label>
                                <input type="file" id="cropImageFile"
                                       className="form-input"
                                       onChange={handleImageChange1}
                                />
                            </div>
                            <div>
                                <label htmlFor="cropCategory"
                                       className="block text-sm font-medium text-purple-700">Category</label>
                                <input type="text" id="cropCategory"
                                       className="form-input" placeholder="Enter category"
                                       required
                                       value={category}
                                       onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="cropSeason" className="block text-sm font-medium text-purple-700">Crop
                                    Season</label>
                                <input type="text" id="cropSeason"
                                       className="form-input" placeholder="Enter season"
                                       required
                                       value={season}
                                       onChange={(e) => setSeason(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="fieldIdInCrop" className="block text-sm font-medium text-purple-700">Field
                                    ID</label>
                                <select id="fieldIdInCrop"
                                        className="form-select"
                                        required
                                        value={field}
                                        onChange={(e)=>setField(e.target.value)}
                                >
                                    <option selected disabled value="">Select Field...</option>
                                    {fieldList.map((field)=>(
                                        <option key={field.fieldId} value={field.fieldId}>
                                            {field.fieldId}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" id="cropSaveBtn"
                                        className="btn-success w-full mt-4 bg-green-600 text-white p-1 rounded-lg" onClick={handleSave}>Save
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
                        <tbody id="cropTableBody" className="bg-white">

                        </tbody>
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
                                <label htmlFor="updateFieldId"
                                       className="block text-lg font-medium text-gray-700">
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
                                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200" onClick={handleUpdate}>
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