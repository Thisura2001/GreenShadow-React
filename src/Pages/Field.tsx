import { useEffect, useState } from "react";
import HeaderComponent from "../Component/HeaderComponet.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../Store/Store.ts";
import Field from "../Model/Field.ts";
import Swal from 'sweetalert2';
import {deleteField, getAllFields, saveField, toBase64, updateField} from "../Reducer/FiledSlice.ts";
import * as React from "react";

export default function FieldForm() {
    const [fieldId, setFieldId] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [location, setLocation] = useState('');
    const [extend, setExtend] = useState('');
    const [fieldImg1, setFieldImg1] = useState<string | null>(null);
    const [fieldImg2, setFieldImg2] = useState<string | null>(null);

    const showFieldForm = () => {
        const fieldFormCard = document.getElementById("fieldFormCard") as HTMLElement;
        if (fieldFormCard) {
            fieldFormCard.style.display = "block";
        }
    };

    const hideFieldForm = () => {
        const fieldFormCard = document.getElementById("fieldFormCard") as HTMLElement;
        if (fieldFormCard) {
            fieldFormCard.style.display = "none";
        }
    };

    const hideUpdateFieldModal = () => {
        const fieldUpdateFormCard = document.getElementById("updateFieldModal") as HTMLElement;
        if (fieldUpdateFormCard) {
            fieldUpdateFormCard.style.display = "none";
        }
    };

    const handleFieldEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        const row = target.closest("tr") as HTMLTableRowElement;

        if (row) {
            const fieldId = row.cells[0].innerText;
            const fieldName = row.cells[1].innerText;
            const fieldLocation = row.cells[2].innerText;
            const fieldExtent = row.cells[3].innerText;
            const fieldImg1 = row.cells[4].querySelector("img")?.src || "";
            const fieldImg2 = row.cells[5].querySelector("img")?.src || "";

            setFieldId(fieldId);
            setFieldName(fieldName);
            setLocation(fieldLocation);
            setExtend(fieldExtent);
            setFieldImg1(fieldImg1);
            setFieldImg2(fieldImg2);

            const fieldUpdateFormCard = document.getElementById("updateFieldModal") as HTMLElement;
            if (fieldUpdateFormCard) {
                fieldUpdateFormCard.style.display = "block";
            }
        }
    };

    const handleImageChange1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            try {
                const base64Image = await toBase64(file);
                setFieldImg1(base64Image);

                const previewElement = document.getElementById("fieldImgPreview01");
                if (previewElement) {
                    previewElement.innerHTML = `<img src="${base64Image}" alt="Field Image 01" class="w-full h-auto mt-2" />`;
                }
            } catch (error) {
                console.error("Error converting image to base64: ", error);
            }
        }
    };

    const handleImageChange2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            try {
                const base64Image = await toBase64(file);
                setFieldImg2(base64Image);

                const previewElement = document.getElementById("fieldImgPreview02");
                if (previewElement) {
                    previewElement.innerHTML = `<img src="${base64Image}" alt="Field Image 02" class="w-full h-auto mt-2" />`;
                }
            } catch (error) {
                console.error("Error converting image to base64: ", error);
            }
        }
    };

    const dispatch = useDispatch<AppDispatch>();
    const fields = useSelector(state => state.fields)

    useEffect(() => {
        if (fields.length === 0) {
            dispatch(getAllFields())
        }
    }, [dispatch, fields.length]);

    function handleAdd(e:React.FormEvent) {
        e.preventDefault();
        if ( !fieldName || !location || !extend || !fieldImg1) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'All required fields must be filled before saving.',
                confirmButtonColor: '#3085d6',
            });
            return;
        }
        const field = new Field(Number(fieldId), fieldName, location, extend, String(fieldImg1), String(fieldImg2))
        dispatch(saveField(field)).then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Field Saved!',
                text: 'The Field has been successfully added.',
                confirmButtonColor: '#3085d6',
            });
            ResetForm();
        }).catch((error) => {
            console.error('Error adding field: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Save Failed',
                text: 'An error occurred while saving the Field. Please try again.',
            });
        })
    }

    function handleUpdate() {
        const fieldUpdate = new Field(Number(fieldId), fieldName, location, extend, String(fieldImg1), String(fieldImg2))
        dispatch(updateField(fieldUpdate)).then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Field updated!',
                text: 'The Field has been successfully updated.',
                confirmButtonColor: '#3085d6',
            });
            ResetForm()
        }).catch((error) => {
            console.error('Error updating field: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'An error occurred while updating the Field. Please try again.',
            });
        })
    }

    function handleDelete(fieldId: number) {
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
                dispatch(deleteField(fieldId))
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Field Deleted!",
                            text: "The field has been successfully deleted.",
                            confirmButtonColor: "#3085d6",
                        });
                        ResetForm();
                    })
                    .catch((error) => {
                        console.error("Error deleting field: ", error);
                        Swal.fire({
                            icon: "error",
                            title: "Delete Failed",
                            text: "An error occurred while deleting the field. Please try again.",
                        });
                    });
            }
        });
    }

    function ResetForm(){
        setFieldId('')
        setFieldName('')
        setLocation('')
        setExtend('')
        setFieldImg1('')
        setFieldImg2('')
    }

    return (
        <>
            <section id="field" className="ml-60 p-20">
                <HeaderComponent title={"Field Management"}>
                    <button id="addFieldBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={showFieldForm}
                    >
                        Add New Field
                    </button>
                </HeaderComponent>
                <div id="fieldFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
                        <h4 className="text-lg font-bold">Add Field Details</h4>
                        <button id="closeFieldForm" className="text-gray-500 hover:text-gray-700 text-xl" onClick={hideFieldForm}>X</button>
                    </div>
                    <form id="FieldFormCard" className="space-y-4 p-5" onSubmit={handleAdd}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fieldName" className="block text-sm font-medium text-gray-700">Field
                                    Name</label>
                                <input type="text" id="fieldName"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       placeholder="Enter Field name" required
                                       value={fieldName}
                                       onChange={(e) => setFieldName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Field
                                    Location</label>
                                <input type="text" id="location" className="mt-1 block w-full border rounded-md p-2"
                                       placeholder="Enter Field Location" required
                                       value={location}
                                       onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="extent" className="block text-sm font-medium text-gray-700">Field
                                    Extent</label>
                                <input type="text" id="extent" className="mt-1 block w-full border rounded-md p-2"
                                       placeholder="Enter Field Extent" required
                                       value={extend}
                                       onChange={(e) => setExtend(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="fieldImg01" className="block text-sm font-medium text-gray-700">Field
                                    Image 01</label>
                                <input type="file" onChange={handleImageChange1} id="fieldImg01"
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                            <div>
                                <label htmlFor="fieldImg02" className="block text-sm font-medium text-gray-700">Field
                                    Image 02</label>
                                <input type="file" onChange={handleImageChange2} id="fieldImg02"
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                        </div>
                        <button type="submit" id="fieldSaveBtn"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Save <i className="fa-regular fa-floppy-disk"></i>
                        </button>
                    </form>
                </div>
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
                        {fields.map((field: Field) => (
                            <tr key={field.fieldId}>
                                <td className="py-3 px-6 border-b">{field.fieldId}</td>
                                <td className="py-3 px-6 border-b">{field.fieldName}</td>
                                <td className="py-3 px-6 border-b">{field.location}</td>
                                <td className="py-3 px-6 border-b">{field.extend}</td>
                                <td className="py-3 px-6 border-b">
                                    {field.fieldImg1 && (
                                        <img src={field.fieldImg1} alt="Field Image 1"
                                             className="w-16 h-16 object-cover"/>
                                    )}
                                </td>
                                <td className="py-3 px-6 border-b">
                                    {field.fieldImg2 && (
                                        <img src={field.fieldImg2} alt="Field Image 2"
                                             className="w-16 h-16 object-cover"/>
                                    )}
                                </td>
                                <td className="py-3 px-6 border-b">
                                    <button className="editFieldBtn text-blue-500 hover:underline mr-3" onClick={handleFieldEditClick}>Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded ml-2"  onClick={() => handleDelete(field.fieldId)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div id="updateFieldModal"
                     className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg  w-1/3 max-w-xl z-50 hidden">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-bold text-black mb-4 text-center">Update Field Details</h2>
                        <form id="updateFieldForm" className="space-y-4">
                            <div>
                                <label htmlFor="updateName"
                                       className="block text-sm font-medium text-gray-700">Name:</label>
                                <input type="text" id="updateName"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       value={fieldName}
                                       onChange={(e) => setFieldName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateLocation"
                                       className="block text-sm font-medium text-gray-700">Location:</label>
                                <input type="text" id="updateLocation"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       value={location}
                                       onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateExtent" className="block text-sm font-medium text-gray-700">Extent
                                    Size:</label>
                                <input type="text" id="updateExtent"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       value={extend}
                                       onChange={(e) => setExtend(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateFieldImg1"
                                       className="block text-sm font-medium text-gray-700">Field
                                    Image 1:</label>
                                <input type="file" id="updateFieldImg1"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       onChange={handleImageChange1}
                                />
                            </div>
                            <div>
                                <label htmlFor="updateFieldImg2"
                                       className="block text-sm font-medium text-gray-700">Field
                                    Image 2:</label>
                                <input type="file" id="updateFieldImg2"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       onChange={handleImageChange2}
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" id="saveUpdatedField"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate}>Update
                                </button>
                                <button type="button" id="closeUpdateModalBtn"
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded" onClick={hideUpdateFieldModal}>Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}