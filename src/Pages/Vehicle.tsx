import "../Css/Vehicle.css"
import {useEffect} from "react";
import VehicleHeader from "../Component/VehicleComponent/VehicleHeader.tsx";
import VehicleAddCard from "../Component/AddCardComponent/VehicleAddCard.tsx";
import VehicleUpdate from "../Component/UpdateCardComponent/VehicleUpdate.tsx";
import HeaderComponent from "../Component/HeaderComponet.tsx";
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
                <HeaderComponent title={"Vehicle Management"}>
                    <button id="addVehicleBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
                        Add New Vehicle
                    </button>
                </HeaderComponent>
                <VehicleAddCard/>
                <div className="flex items-center justify-center bg-gray-100">
                    <div className="w-full max-w-4xl mt-8 overflow-x-auto">
                        <table id="tblVehicle" className="min-w-full border-collapse border border-gray-300">
                            <thead className="bg-teal-600 text-white">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Vehicle Code</th>
                                <th className="px-4 py-2 border border-gray-300">License Plate</th>
                                <th className="px-4 py-2 border border-gray-300">Category</th>
                                <th className="px-4 py-2 border border-gray-300">Fuel Type</th>
                                <th className="px-4 py-2 border border-gray-300">Status</th>
                                <th className="px-4 py-2 border border-gray-300">Staff ID</th>
                                <th className="px-4 py-2 border border-gray-300">Action</th>
                            </tr>
                            </thead>
                            <tbody id="tbodyVehicle" className="text-center">
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">V001</td>
                                <td className="px-4 py-2 border border-gray-300">ABC-1234</td>
                                <td className="px-4 py-2 border border-gray-300">SUV</td>
                                <td className="px-4 py-2 border border-gray-300">Petrol</td>
                                <td className="px-4 py-2 border border-gray-300">AVAILABLE</td>
                                <td className="px-4 py-2 border border-gray-300">STF001</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <button className="editCropBtn text-blue-500 hover:underline mr-3">Edit</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <VehicleUpdate/>
            </section>
        </>
    )
}