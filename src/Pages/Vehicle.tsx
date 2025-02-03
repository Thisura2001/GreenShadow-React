import "../Css/Vehicle.css"
import {useEffect, useState} from "react";
import HeaderComponent from "../Component/HeaderComponet.tsx";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import Vehicle from "../Model/Vehicle.ts";
import {Status} from "../Enum/Status.ts";
import {saveVehicle} from "../Reducer/VehicleSlice.ts";
export default function VehicleForm() {
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
    const [id, setId] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [category, setCategory] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [status, setStatus] = useState('');
    const [staffId, setStaffId] = useState<string>('');


    const dispatch = useDispatch<AppDispatch>();

    function handleSave(event: React.FormEvent) {
        event.preventDefault(); // Prevent form submission from refreshing the page

        const statusEnumValue = Status[status as keyof typeof Status]; // Convert string to enum
        if (!statusEnumValue) {
            console.error(`Invalid status: ${status}`);
            return;
        }

        if (!staffId) {
            console.error('Staff ID is required');
            return;
        }

        const newVehicle = new Vehicle(Number(id), licensePlate, category, fuelType, statusEnumValue, staffId);
        dispatch(saveVehicle(newVehicle));
    }

    return(
        <>
            <section id="vehicle" className="min-h-screen bg-gray-100 p-6">
                <HeaderComponent title={"Vehicle Management"}>
                    <button id="addVehicleBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
                        Add New Vehicle
                    </button>
                </HeaderComponent>
                <div id="vehicleFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h4 className="text-xl font-bold text-gray-800">Add Vehicle Details</h4>
                        <button id="closeVehicleForm" className="text-gray-400 hover:text-red-500 text-xl">X</button>
                    </div>
                    <form id="vehicleForm" className="space-y-4" onSubmit={handleSave}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">
                                    License Plate
                                </label>
                                <input
                                    type="text"
                                    id="licensePlate"
                                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    placeholder="Enter license plate"
                                    value={licensePlate}
                                    onChange={(e) => setLicensePlate(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Choose category...</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">Van</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">
                                    Fuel Type
                                </label>
                                <select
                                    id="fuelType"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    value={fuelType}
                                    onChange={(e) => setFuelType(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Choose fuel type...</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Choose status...</option>
                                    <option value="AVAILABLE">AVAILABLE</option>
                                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="VehicleStaffId" className="block text-sm font-medium text-gray-700">
                                    Staff ID
                                </label>
                                <input
                                    type="text"
                                    id="VehicleStaffId"
                                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    value={staffId}
                                    onChange={(e) => setStaffId(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button id="btnVehicleSave" type="submit"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
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
                <div
                    id="updateVehicleModal"
                    className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Update Vehicle Details
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="updateVehicleLicensePlate"
                                       className="block text-lg font-medium text-gray-700">
                                    License Plate
                                </label>
                                <input
                                    type="text"
                                    id="updateVehicleLicensePlate"
                                    className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter license plate"
                                />
                            </div>
                            <div>
                                <label htmlFor="updateVehicleCategory"
                                       className="block text-lg font-medium text-gray-700">
                                    Category
                                </label>
                                <select
                                    id="updateVehicleCategory"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="" selected disabled>
                                        Choose category...
                                    </option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">Van</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateVehicleFuelType"
                                       className="block text-lg font-medium text-gray-700">
                                    Fuel Type
                                </label>
                                <select
                                    id="updateVehicleFuelType"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="" selected disabled>
                                        Choose fuel type...
                                    </option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateVehicleStatus"
                                       className="block text-lg font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="updateVehicleStatus"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="" selected disabled>
                                        Choose status...
                                    </option>
                                    <option value="AVAILABLE">AVAILABLE</option>
                                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateVehicleStaffId"
                                       className="block text-lg font-medium text-gray-700">
                                    Staff ID
                                </label>
                                <select
                                    id="updateVehicleStaffId"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="" selected disabled>
                                        Select Staff...
                                    </option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    id="saveUpdatedVehicle"
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                                >
                                    Update
                                </button>
                                <button
                                    id="closeUpdateVehicleModalBtn"
                                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                                >
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