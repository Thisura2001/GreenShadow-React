import "../Css/Crop.css"
import {useEffect} from "react";
import CropAddCard from "../Component/AddCardComponent/CropAddCard.tsx";
import CropUpdateCard from "../Component/UpdateCardComponent/CropUpdateCard.tsx";
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
                <CropAddCard/>
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
                <CropUpdateCard/>
            </section>
        </>
    )
}