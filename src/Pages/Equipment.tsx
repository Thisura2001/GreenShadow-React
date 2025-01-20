import { useEffect } from "react";
import EquipmentHeader from "../Component/EquipmentComponent/EquipmentHeader.tsx";
import EquipmentAdd from "../Component/AddCardComponent/EquipmentAdd.tsx";
import EquipmentUpdate from "../Component/UpdateCardComponent/EquipmentUpdate.tsx";
import HeaderComponent from "../Component/HeaderComponet.tsx";

export default function Equipment() {
    useEffect(() => {
        const equipmentFormCard = document.getElementById("equipmentFormCard") as HTMLElement;
        const addEquipmentBtn = document.getElementById('addEquipmentBtn') as HTMLButtonElement;
        const closeEquipmentBtn = document.getElementById('closeEquipmentForm') as HTMLButtonElement;
        const closeUpdateEquipmentModalBtn = document.getElementById('closeUpdateEquipmentModalBtn') as HTMLButtonElement;

        // Add Equipment Form Card Show/Hide Logic
        if (addEquipmentBtn) {
            addEquipmentBtn.addEventListener('click', () => {
                equipmentFormCard.style.display = 'block';
            });
        }

        if (closeEquipmentBtn) {
            closeEquipmentBtn.addEventListener('click', () => {
                equipmentFormCard.style.display = 'none';
            });
        }
        if (closeUpdateEquipmentModalBtn) {
            closeUpdateEquipmentModalBtn.addEventListener('click', () => {
                document.getElementById('updateEquipmentModal')!.style.display = 'none';
            });
        }

        // Edit Equipment Button Logic
        const editEquipmentBtns = document.querySelectorAll('.editEquipmentBtn');
        editEquipmentBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const row = (e.target as HTMLElement).closest('tr');
                if (row) {
                    const equipmentId = row.cells[0].innerText;
                    const equipmentName = row.cells[1].innerText;
                    const equipmentType = row.cells[2].innerText;
                    const equipmentStatus = row.cells[3].innerText;

                    document.getElementById('updateEquipmentName')!.value = equipmentName;
                    document.getElementById('updateEquipmentType')!.value = equipmentType;
                    document.getElementById('updateEquipmentStatus')!.value = equipmentStatus;

                    // Show the Update Modal
                    document.getElementById('updateEquipmentModal')!.style.display = 'flex';
                }
            });
        });
    }, []);

    return (
        <>
            <section id="equipment" className="ml-60 p-20">
                <HeaderComponent title={"Equipment Management"}>
                    <button
                        id="addEquipmentBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Crop
                    </button>
                </HeaderComponent>
                <EquipmentAdd/>
                <div className="mt-10 overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-left">
                        <thead className="bg-teal-600 text-white">
                        <tr>
                            <th className="py-3 px-6 border-b">Equipment ID</th>
                            <th className="py-3 px-6 border-b">Equipment Name</th>
                            <th className="py-3 px-6 border-b">Type</th>
                            <th className="py-3 px-6 border-b">Status</th>
                            <th className="py-3 px-6 border-b">Staff</th>
                            <th className="py-3 px-6 border-b">Field</th>
                            <th className="py-3 px-6 border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody id="EquipmentTableBody" className="bg-white">
                        {/* Example Row */}
                        <tr>
                            <td className="py-3 px-6 border-b">E001</td>
                            <td className="py-3 px-6 border-b">Tractor</td>
                            <td className="py-3 px-6 border-b">Heavy Machinery</td>
                            <td className="py-3 px-6 border-b">Available</td>
                            <td className="py-3 px-6 border-b">S001</td>
                            <td className="py-3 px-6 border-b">F001</td>

                            <td className="py-3 px-6 border-b">
                                <button className="editEquipmentBtn text-blue-500 hover:underline mr-3">Edit</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <EquipmentUpdate/>
            </section>
        </>
    );
}
