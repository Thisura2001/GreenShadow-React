import "../Css/Vehicle.css"
import {useEffect} from "react";
import VehicleHeader from "../Component/VehicleComponent/VehicleHeader.tsx";
import VehicleAddCard from "../Component/VehicleComponent/VehicleAddCard.tsx";
import VehicleTable from "../Component/VehicleComponent/VehicleTable.tsx";
import VehicleUpdate from "../Component/VehicleComponent/VehicleUpdate.tsx";
export default function Vehicle() {
    useEffect(() => {
        const addVehicleBtn = document.getElementById('addVehicleBtn') as HTMLButtonElement;
        const vehicleFormCard = document.getElementById('vehicleFormCard') as HTMLElement;
        const closeVehicleFormBtn = document.getElementById('closeVehicleForm') as HTMLElement;
        const updateVehicleModal = document.getElementById('updateVehicleModal') as HTMLElement;
        const closeUpdateVehicleModalBtn = document.getElementById('closeUpdateVehicleModalBtn') as HTMLButtonElement;

        if (addVehicleBtn){
            addVehicleBtn.addEventListener("click",()=>{
                vehicleFormCard.style.display = "block";
            })
        }
        if (closeVehicleFormBtn){
            closeVehicleFormBtn.addEventListener("click",()=>{
                vehicleFormCard.style.display = "none";
            })
        }
        const editVehicleBtns = document.querySelectorAll('.editCropBtn') as NodeListOf<HTMLButtonElement>;
        editVehicleBtns.forEach((editBtn) => {
            editBtn.addEventListener('click', (event) => {
                const row = (event.target as HTMLElement).closest('tr')!;
                const licensePlate = row.cells[1].textContent;
                const category = row.cells[2].textContent;
                const fuelType = row.cells[3].textContent;
                const status = row.cells[4].textContent;
                const staffId = row.cells[5].textContent;

                (document.getElementById('updateVehicleLicensePlate') as HTMLInputElement).value = licensePlate!;
                (document.getElementById('updateVehicleCategory') as HTMLSelectElement).value = category!;
                (document.getElementById('updateVehicleFuelType') as HTMLSelectElement).value = fuelType!;
                (document.getElementById('updateVehicleStatus') as HTMLSelectElement).value = status!;
                (document.getElementById('updateVehicleStaffId') as HTMLSelectElement).value = staffId!;

                updateVehicleModal.style.display = 'flex';
            });
        });
        if (closeUpdateVehicleModalBtn) {
            closeUpdateVehicleModalBtn.addEventListener('click', () => {
                updateVehicleModal.style.display = 'none';
            });
        }
    }, []);
    return(
        <>
            <section id="vehicle" className="min-h-screen bg-gray-100 p-6">
                <VehicleHeader/>
                <VehicleAddCard/>
                <VehicleTable/>
                <VehicleUpdate/>
            </section>
        </>
    )
}