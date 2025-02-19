import "../Css/Vehicle.css";
import { useEffect, useState } from "react";
import HeaderComponent from "../Component/HeaderComponet.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../Store/Store.ts";
import Vehicle from "../Model/Vehicle.ts";
import { Status } from "../Enum/Status.ts";
import {deleteVehicle, getAllVehicles, saveVehicle, updateVehicle} from "../Reducer/VehicleSlice.ts";
import Swal from 'sweetalert2';

export default function VehicleForm() {
    const [id, setId] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [category, setCategory] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [status, setStatus] = useState('');
    const [staffId, setStaffId] = useState<string>('');
    const [staffList, setStaffList] = useState<any[]>([]);

    const vehicles = useSelector(state => state.vehicles);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        async function fetchStaffData() {
            try {
                const response = await fetch('http://localhost:8080/staff/');
                const data = await response.json();
                setStaffList(data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        }

        fetchStaffData();
    }, []);

    const showVehicleForm = () => {
        const vehicleFormCard = document.getElementById("vehicleFormCard") as HTMLElement;
        if (vehicleFormCard) {
            vehicleFormCard.style.display = "block";
        }
    };

    const hideVehicleForm = () => {
        const vehicleFormCard = document.getElementById("vehicleFormCard") as HTMLElement;
        if (vehicleFormCard) {
            vehicleFormCard.style.display = "none";
        }
    };

    const showUpdateVehicleModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        const row = target.closest("tr") as HTMLTableRowElement;

        if (row) {
            const vehicle_code = row.cells[0].innerText;
            const licensePlate = row.cells[1].textContent;
            const category = row.cells[2].textContent;
            const fuelType = row.cells[3].textContent;
            const status = row.cells[4].textContent;
            const staffId = row.cells[5].textContent;

            setId(vehicle_code);
            setLicensePlate(licensePlate!);
            setCategory(category!);
            setFuelType(fuelType!);
            setStatus(status!);
            setStaffId(staffId!);

            const updateVehicleModal = document.getElementById("updateVehicleModal") as HTMLElement;
            if (updateVehicleModal) {
                updateVehicleModal.style.display = "flex";
            }
        }
    };

    const hideUpdateVehicleModal = () => {
        const updateVehicleModal = document.getElementById("updateVehicleModal") as HTMLElement;
        if (updateVehicleModal) {
            updateVehicleModal.style.display = "none";
        }
    };


    const statusEnumValue = Status[status as keyof typeof Status];

    function handleSave(event: React.FormEvent) {
        event.preventDefault();

        const newVehicle = new Vehicle(Number(id), licensePlate, category, fuelType, statusEnumValue, Number(staffId));
        console.log(newVehicle);

        dispatch(saveVehicle(newVehicle))
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Vehicle Saved!',
                    text: 'The vehicle has been successfully added.',
                    confirmButtonColor: '#3085d6',
                });
                resetForm();
            })
            .catch((error) => {
                console.error('Error saving vehicle:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Save Failed',
                    text: 'An error occurred while saving the vehicle. Please try again.',
                });
            });
    }

    const resetForm = () => {
        setId('');
        setLicensePlate('');
        setCategory('');
        setFuelType('');
        setStatus('');
        setStaffId('');
    };


    useEffect(() => {
        if (vehicles.length === 0) {
            dispatch(getAllVehicles());
        }
    }, [dispatch, vehicles.length]);

    function handleUpdate() {

        if (!id || isNaN(Number(id))) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Vehicle ID',
                text: 'Vehicle ID is missing or invalid.',
            });
            return;
        }
        console.log('update');
        console.log(new Vehicle(Number(id), licensePlate, category, fuelType, statusEnumValue, Number(staffId)));
        const update = new Vehicle(Number(id), licensePlate, category, fuelType, statusEnumValue, Number(staffId));
        dispatch(updateVehicle(update))
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Vehicle updated!',
                    text: 'The vehicle has been successfully updated.',
                    confirmButtonColor: '#3085d6',
                });
                resetForm();
            })
            .catch((error) => {
                console.error('Error updating vehicle:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'An error occurred while updating the vehicle. Please try again.',
                });
            });
    }

    function handleDelete(vehicle_code: number) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteVehicle(vehicle_code))
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Field Deleted!",
                            text: "The Vehicle has been successfully deleted.",
                            confirmButtonColor: "#3085d6",
                        });
                    })
                    .catch((error) => {
                        console.error("Error deleting field: ", error);
                        Swal.fire({
                            icon: "error",
                            title: "Delete Failed",
                            text: "An error occurred while deleting the Vehicle. Please try again.",
                        });
                    });
            }
        });
    }

    return (
        <>
            <section id="vehicle" className="min-h-screen bg-gray-100 p-6">
                <HeaderComponent title={"Vehicle Management"}>
                    <button id="addVehicleBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2" onClick={showVehicleForm}>
                        Add New Vehicle
                    </button>
                </HeaderComponent>
                <div id="vehicleFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
                        <h4 className="text-xl font-bold text-white">Add Vehicle Details</h4>
                        <button id="closeVehicleForm" className="text-gray-400 hover:text-red-500 text-xl" onClick={hideVehicleForm}>X</button>
                    </div>
                    <form id="vehicleForm" className="space-y-4 p-5">
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
                                <select
                                    id="VehicleStaffId"
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    value={staffId}
                                    onChange={(e) => setStaffId(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Choose staff...</option>
                                    {staffList.map((staff) => (
                                        <option key={staff.id} value={staff.id}>
                                            {staff.name} {staff.id}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button id="btnVehicleSave" type="submit" onClick={handleSave}
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
                            {vehicles.map((vehicle: Vehicle) => (
                                <tr key={vehicle.vehicle_code} className="border border-gray-300">
                                    <td className="px-4 py-2 border border-gray-300">{vehicle.vehicle_code}</td>
                                    <td className="px-4 py-2 border border-gray-300">{vehicle.licensePlateNumber}</td>
                                    <td className="px-4 py-2 border border-gray-300">{vehicle.vehicleCategory}</td>
                                    <td className="px-4 py-2 border border-gray-300">{vehicle.fuelType}</td>
                                    <td className="px-4 py-2 border border-gray-300">{vehicle.status}</td>
                                    <td className="px-4 py-2 border border-gray-300">{vehicle.staffId}</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <button className="editVehicleBtn text-blue-500 hover:underline mr-3" onClick={showUpdateVehicleModal}>Edit</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded ml-2" onClick={()=>{handleDelete(vehicle.vehicle_code)}}>Delete</button>
                                    </td>
                                </tr>
                            ))}
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
                                    value={licensePlate}
                                    onChange={(e) => setLicensePlate(e.target.value)}
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
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="" disabled>Choose category...</option>
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
                                    value={fuelType}
                                    onChange={(e) => setFuelType(e.target.value)}
                                >
                                    <option value="" disabled>Choose fuel type...</option>
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
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="" disabled>Choose status...</option>
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
                                    className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    value={staffId}
                                    onChange={(e) => setStaffId(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Choose staff...</option>
                                    {staffList.map((staff) => (
                                        <option key={staff.id} value={staff.id}>
                                            {staff.name} {staff.id}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    id="saveUpdatedVehicle"
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                                <button
                                    id="closeUpdateVehicleModalBtn"
                                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                                    onClick={hideUpdateVehicleModal}
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