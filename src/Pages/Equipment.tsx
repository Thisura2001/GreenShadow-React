import { useEffect } from "react";
import EquipmentHeader from "../Component/EquipmentComponent/EquipmentHeader.tsx";
import EquipmentAdd from "../Component/EquipmentComponent/EquipmentAdd.tsx";
import EquipmentTable from "../Component/EquipmentComponent/EquipmentTable.tsx";
import EquipmentUpdate from "../Component/EquipmentComponent/EquipmentUpdate.tsx";

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
            <section id="equipment" className="p-8 min-h-screen flex flex-col items-center justify-center">
               <EquipmentHeader/>
                <EquipmentAdd/>
                <EquipmentTable/>
                <EquipmentUpdate/>
            </section>
        </>
    );
}
