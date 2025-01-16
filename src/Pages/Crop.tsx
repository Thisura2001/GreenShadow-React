import "../Css/Crop.css"
import {useEffect} from "react";
import CropHeader from "../Component/CropComponent/CropHeader.tsx";
import CropAddCard from "../Component/CropComponent/CropAddCard.tsx";
import CropTable from "../Component/CropComponent/CropTable.tsx";
import CropUpdateCard from "../Component/CropComponent/CropUpdateCard.tsx";

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
                <CropHeader/>
                <CropAddCard/>
                <CropTable/>
                <CropUpdateCard/>
            </section>
        </>
    )
}