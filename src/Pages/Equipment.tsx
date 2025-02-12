import HeaderComponent from "../Component/HeaderComponet.tsx";
import {useEffect, useState} from "react";
import Equipment from "../Model/Equipment.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import {deleteEquipment, getAllEquipment, saveEquipment, updateEquipment} from "../Reducer/EquipmentSlice.ts";
import Swal from "sweetalert2";
import {deleteField} from "../Reducer/FiledSlice.ts";

export default function EquipmentForm() {
    const [eqId,setEquipmentId] = useState('')
    const [name,setEquipmentName] = useState('')
    const [equipmentType,setEquipmentType] = useState('')
    const [status,setStatus] = useState('')
    const [staff,setStaff] = useState('')
    const [staffList,setStaffList] = useState<any[]>([]);
    const [field,setField] = useState('')
    const [fieldList,setFieldList] = useState<any[]>([]);

    const showEquipmentForm = () => {
        const equipmentCard = document.getElementById("equipmentFormCard") as HTMLElement;
        if (equipmentCard) {
            equipmentCard.style.display = "block";
        }
    };

    const hideEquipmentForm = () => {
        const equipmentCard = document.getElementById("equipmentFormCard") as HTMLElement;
        if (equipmentCard) {
            equipmentCard.style.display = "none";
        }
    };

    const hideUpdateEquipmentModal = () => {
        const updateEquipmentModal = document.getElementById("updateEquipmentModal") as HTMLElement;
        if (updateEquipmentModal) {
            updateEquipmentModal.style.display = "none";
        }
    };

    const handleEditEquipmentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        const row = target.closest("tr") as HTMLTableRowElement;

        const equipmentId = row.cells[0].innerText;
        const equipmentName = row.cells[1].innerText;
        const equipmentType = row.cells[2].innerText;
        const equipmentStatus = row.cells[3].innerText;
        const staff = row.cells[4].innerText;
        const field = row.cells[5].innerText;

        setEquipmentId(equipmentId);
        setEquipmentName(equipmentName);
        setEquipmentType(equipmentType);
        setStatus(equipmentStatus);
        setStaff(staff);
        setField(field);

        const updateEquipmentModal = document.getElementById("updateEquipmentModal") as HTMLElement;
        if (updateEquipmentModal) {
            updateEquipmentModal.style.display = "flex";
        }
    };

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
        async function fetchFieldData() {
            try {
                const response = await fetch('http://localhost:8080/field/');
                const data = await response.json();
                setFieldList(data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        }
        fetchFieldData();
        fetchStaffData();
    }, []);

    const dispatch = useDispatch<AppDispatch>();
    const Equipments = useSelector(state => state.equipments)

    useEffect(() => {
        if (Equipments.length === 0){
            dispatch(getAllEquipment())
        }
    }, [dispatch, Equipments.length]);

    function handleSave() {
        const equipment = new Equipment(Number(eqId),name,equipmentType,status,Number(staff),Number(field));
        dispatch(saveEquipment(equipment)).then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Equipment Saved!',
                text: 'The Equipment has been successfully added.',
                confirmButtonColor: '#3085d6',
            });
            ResetForm();
        }).catch((error) => {
            console.error('Error adding field: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Save Failed',
                text: 'An error occurred while saving the Equipment. Please try again.',
            });
        })
    }
    function ResetForm() {
        setEquipmentId("");
        setEquipmentName('')
        setEquipmentType('')
        setStatus("");
        setStaff("");
        setField("");
    }

    function handleDelete(eqId: number) {
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
                dispatch(deleteEquipment(eqId))
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Equipment Deleted!",
                            text: "The Equipment has been successfully deleted.",
                            confirmButtonColor: "#3085d6",
                        });
                        ResetForm();
                    })
                    .catch((error) => {
                        console.error("Error deleting field: ", error);
                        Swal.fire({
                            icon: "error",
                            title: "Delete Failed",
                            text: "An error occurred while deleting the Equipment. Please try again.",
                        });
                    });
            }
        });
    }

    function handleUpdate() {
        const updatedEq = new Equipment(Number(eqId),name,equipmentType,status,Number(staff),Number(field));
        dispatch(updateEquipment(updatedEq)).then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Equipment updated!',
                text: 'The Equipment has been successfully updated.',
                confirmButtonColor: '#3085d6',
            });
            ResetForm()
        }).catch((error) => {
            console.error('Error updating Equipment: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'An error occurred while updating the Equipment. Please try again.',
            });
        })
    }

    return (
        <>
            <section id="equipment" className="ml-60 p-20">
                <HeaderComponent title={"Equipment Management"}>
                    <button
                        id="addEquipmentBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={showEquipmentForm}
                    >
                        Add New Equipment
                    </button>
                </HeaderComponent>
                <div id="equipmentFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
                        <h4 className="text-lg font-bold">Add Equipment Details</h4>
                        <button id="closeEquipmentForm" className="text-gray-500 hover:text-gray-700 text-xl" onClick={hideEquipmentForm}>X</button>
                    </div>
                    <form id="equipmentForm" className="space-y-6 p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="equipmentName" className="block text-sm font-medium text-gray-700">Equipment
                                    Name</label>
                                <input type="text" id="equipmentName"
                                       className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="Enter equipment name" required
                                       onChange={(e) => setEquipmentName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="equipmentType"
                                       className="block text-sm font-medium text-gray-700">Type</label>
                                <select id="equipmentType"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        onChange={(e) => setEquipmentType(e.target.value)}
                                >
                                    <option selected disabled value="">Choose type...</option>
                                    <option value="ELECTRICAL">ELECTRICAL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="equipmentStatus"
                                       className="block text-sm font-medium text-gray-700">Status</label>
                                <select id="equipmentStatus"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option selected disabled value="">Choose status...</option>
                                    <option value="AVAILABLE">AVAILABLE</option>
                                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="assignedStaff" className="block text-sm font-medium text-gray-700">Assigned
                                    Staff</label>
                                <select id="assignedStaff"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                        onChange={(e) => setStaff(e.target.value)}
                                >
                                    <option value="" disabled>Choose staff...</option>
                                    {staffList.map((staff) => (
                                        <option key={staff.id} value={staff.id}>
                                            {staff.name} {staff.id}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="assignedField" className="block text-sm font-medium text-gray-700">Assigned
                                    Field</label>
                                <select id="assignedField"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                        onChange={(e) => setField(e.target.value)}
                                >
                                        <option selected disabled value="">Select Field...</option>
                                        {fieldList.map((field) => (
                                            <option key={field.fieldId} value={field.fieldId}>
                                                {field.fieldId}
                                            </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button type="submit" id="btnEquipmentSave"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center"
                                    onClick={handleSave}
                            >
                                Save <i className="fa-regular fa-floppy-disk ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
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
                        {Equipments.map((equipment:Equipment) => (
                            <tr key={equipment.eqId}>
                                <td className="py-3 px-6 border-b">{equipment.eqId}</td>
                                <td className="py-3 px-6 border-b">{equipment.name}</td>
                                <td className="py-3 px-6 border-b">{equipment.equipmentType}</td>
                                <td className="py-3 px-6 border-b">{equipment.status}</td>
                                <td className="py-3 px-6 border-b">{equipment.staffId}</td>
                                <td className="py-3 px-6 border-b">{equipment.fieldId}</td>
                                <td className="py-3 px-6 border-b">
                                    <button className="editFieldBtn text-blue-500 hover:underline mr-3"
                                            onClick={handleEditEquipmentClick}>Edit
                                    </button>
                                    <button className="text-red-500 hover:underline"
                                            onClick={() => handleDelete(equipment.eqId)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div id="updateEquipmentModal"
                     className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Update Equipment Details
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="updateEquipmentName"
                                       className="block text-lg font-medium text-gray-700">
                                    Equipment Name
                                </label>
                                <input
                                    type="text"
                                    id="updateEquipmentName"
                                    className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter equipment name"
                                    value={name}
                                    onChange={(e) => setEquipmentName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateEquipmentType"
                                       className="block text-lg font-medium text-gray-700">
                                    Type
                                </label>
                                <select
                                    id="updateEquipmentType"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={equipmentType}
                                    onChange={(e) => setEquipmentType(e.target.value)}
                                >
                                    <option value="ELECTRICAL">ELECTRICAL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateEquipmentStatus"
                                       className="block text-lg font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="updateEquipmentStatus"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="AVAILABLE">AVAILABLE</option>
                                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateAssignedStaff"
                                       className="block text-lg font-medium text-gray-700">
                                    Assigned Staff
                                </label>
                                <select
                                    id="updateAssignedStaff"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={staff}
                                    onChange={(e) => setStaff(e.target.value)}
                                >
                                    <option value="" disabled>Choose staff...</option>
                                    {staffList.map((staff) => (
                                        <option key={staff.id} value={staff.id}>
                                            {staff.name} {staff.id}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="updateAssignedField"
                                       className="block text-lg font-medium text-gray-700">
                                    Assigned Field
                                </label>
                                <select
                                    id="updateAssignedField"
                                    className="form-select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={field}
                                    onChange={(e) => setField(e.target.value)}
                                >
                                    <option selected disabled value="">Select Field...</option>
                                    {fieldList.map((field) => (
                                        <option key={field.fieldId} value={field.fieldId}>
                                            {field.fieldId}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    id="saveUpdatedEquipment"
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                                <button
                                    id="closeUpdateEquipmentModalBtn"
                                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                                    onClick={hideUpdateEquipmentModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
