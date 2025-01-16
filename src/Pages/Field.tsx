import { useEffect } from "react";
import FieldHeader from "../Component/FieldComponent/FieldHeader.tsx";
import AddField from "../Component/FieldComponent/AddField.tsx";
import DisplayCard from "../Component/FieldComponent/DisplayCard.tsx";
import FieldUpdateCard from "../Component/FieldComponent/FieldUpdateCard.tsx";
import FieldTable from "../Component/FieldComponent/FieldTable.tsx";

export default function Field() {
    useEffect(() => {
        const fieldFormCard = document.getElementById("fieldFormCard") as HTMLElement;
        const addFieldBtn = document.getElementById('addFieldBtn') as HTMLButtonElement;
        const closeAddFieldBtn = document.getElementById('closeFieldForm') as HTMLButtonElement;
        const fieldUpdateFormCard = document.getElementById("updateFieldModal") as HTMLElement;
        const closeUpdateField = document.getElementById("closeUpdateModalBtn") as HTMLButtonElement;

        if (addFieldBtn) {
            addFieldBtn.addEventListener('click', () => {
                fieldFormCard.style.display = 'block';
            });
        }

        if (closeAddFieldBtn) {
            closeAddFieldBtn.addEventListener('click', () => {
                fieldFormCard.style.display = 'none';
            });
        }

        if (closeUpdateField) {
            closeUpdateField.addEventListener('click', () => {
                fieldUpdateFormCard.style.display = 'none';
            });
        }

        // Handle Edit button click in the table
        const editFieldBtns = document.querySelectorAll('.editFieldBtn');
        editFieldBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const row = (e.target as HTMLElement).closest('tr');
                if (row) {
                    // Populate the form with the selected field data
                    const fieldId = row.cells[0].innerText;
                    const fieldName = row.cells[1].innerText;
                    const fieldLocation = row.cells[2].innerText;
                    const fieldExtent = row.cells[3].innerText;

                    // Set the values in the update form
                    document.getElementById('updateName')!.value = fieldName;
                    document.getElementById('updateLocation')!.value = fieldLocation;
                    document.getElementById('updateExtent')!.value = fieldExtent;

                    // Open the update modal
                    fieldUpdateFormCard.style.display = 'block';
                }
            });
        });

    }, []);

    return (
        <>
            <section id="field" className="p-8 min-h-screen flex flex-col items-center justify-center">
               <FieldHeader/>
                <AddField/>
                <FieldTable/>
                <FieldUpdateCard/>
            </section>
        </>
    );
}
