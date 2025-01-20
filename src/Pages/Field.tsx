import { useEffect } from "react";
import FieldHeader from "../Component/FieldComponent/FieldHeader.tsx";
import AddField from "../Component/AddCardComponent/AddField.tsx";
import FieldUpdateCard from "../Component/UpdateCardComponent/FieldUpdateCard.tsx";
import HeaderComponent from "../Component/HeaderComponet.tsx";

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
            <section id="field" className="ml-60 p-20">
                <HeaderComponent title={"Field Management"}>
                    <button id="addFieldBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add New Field
                    </button>
                </HeaderComponent>
                <AddField/>
                <div className="mt-10 overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 border-b">Field ID</th>
                            <th className="py-3 px-6 border-b">Field Name</th>
                            <th className="py-3 px-6 border-b">Location</th>
                            <th className="py-3 px-6 border-b">Extent</th>
                            <th className="py-3 px-6 border-b">Image 1</th>
                            <th className="py-3 px-6 border-b">Image 2</th>
                            <th className="py-3 px-6 border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody id="FieldTableBody" className="bg-white">
                        {/* Example Row */}
                        <tr>
                            <td className="py-3 px-6 border-b">F001</td>
                            <td className="py-3 px-6 border-b">Green Field</td>
                            <td className="py-3 px-6 border-b">California</td>
                            <td className="py-3 px-6 border-b">10 Acres</td>
                            <td className="py-3 px-6 border-b">
                                <img src="../assets/farmer.jpg" alt="Image 1"
                                     className="w-12 h-12 object-cover"/>
                            </td>
                            <td className="py-3 px-6 border-b">
                                <img src="../assets/farmer.jpg" alt="Image 2"
                                     className="w-12 h-12 object-cover"/>
                            </td>
                            <td className="py-3 px-6 border-b">
                                <button className="editFieldBtn text-blue-500 hover:underline mr-3">Edit</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <FieldUpdateCard/>
            </section>
        </>
    );
}
