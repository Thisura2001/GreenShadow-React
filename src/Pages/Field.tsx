import { useEffect, useState } from "react";
import HeaderComponent from "../Component/HeaderComponet.tsx";
import {useDispatch, useSelector} from "react-redux";
import { AppDispatch } from "../Store/Store.ts";
import Field from "../Model/Field.ts";
import {getAllFields, saveField} from "../Reducer/FiledSlice.ts";

export default function FieldForm() {
    const [fieldId, setFieldId] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [location, setLocation] = useState('');
    const [extend, setExtend] = useState('');
    const [fieldImg1, setFieldImg1] = useState('');
    const [fieldImg2, setFieldImg2] = useState('');

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
                    (document.getElementById('updateName') as HTMLInputElement).value = fieldName;
                    (document.getElementById('updateLocation') as HTMLInputElement).value = fieldLocation;
                    (document.getElementById('updateExtent') as HTMLInputElement).value = fieldExtent;

                    // Open the update modal
                    fieldUpdateFormCard.style.display = 'block';
                }
            });
        });

    }, []);

    const dispatch = useDispatch<AppDispatch>();
    const fields = useSelector(state => state.fields)

    useEffect(() => {
        if (fields.length === 0){
            dispatch(getAllFields())
        }
        console.log(getAllFields)
    }, [dispatch, fields.length]);
    function handleAdd() {
        const field = new Field(Number(fieldId),fieldName,location,extend,fieldImg1,fieldImg2)
        dispatch(saveField(field))
    }

    return (
        <>
            <section id="field" className="ml-60 p-20">
                <HeaderComponent title={"Field Management"}>
                    <button id="addFieldBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add New Field
                    </button>
                </HeaderComponent>
                <div id="fieldFormCard" className="hidden max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h4 className="text-lg font-bold">Add Field Details</h4>
                        <button id="closeFieldForm" className="text-gray-500 hover:text-gray-700 text-xl">X</button>
                    </div>
                    <form id="FieldFormCard" className="space-y-4" onSubmit={handleAdd}>
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
                                <input type="file" onChange={(e) => setFieldImg1(e.target.value)} id="fieldImg01"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       accept="image/*"/>
                                <div id="fieldImgPreview01" className="mt-2"></div>
                            </div>
                            <div>
                                <label htmlFor="fieldImg02" className="block text-sm font-medium text-gray-700">Field
                                    Image 02</label>
                                <input type="file" onChange={(e) => setFieldImg2(e.target.value)} id="fieldImg02"
                                       className="mt-1 block w-full border rounded-md p-2"
                                       accept="image/*"/>
                                <div id="fieldImgPreview02" className="mt-2"></div>
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
                        {fields.map((field:Field) => (
                            <tr key={field.fieldId}>
                                <td className="py-3 px-6 border-b">{field.fieldId}</td>
                                <td className="py-3 px-6 border-b">{field.fieldName}</td>
                                <td className="py-3 px-6 border-b">{field.location}</td>
                                <td className="py-3 px-6 border-b">{field.extend}</td>
                                <td className="py-3 px-6 border-b">{field.fieldImg1}</td>
                                <td className="py-3 px-6 border-b">{field.fieldImg2}</td>
                                <td className="py-3 px-6 border-b">
                                    <button className="editFieldBtn text-blue-500 hover:underline mr-3">Edit</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
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
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                            <div>
                                <label htmlFor="updateLocation"
                                       className="block text-sm font-medium text-gray-700">Location:</label>
                                <input type="text" id="updateLocation"
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                            <div>
                                <label htmlFor="updateExtent" className="block text-sm font-medium text-gray-700">Extent
                                    Size:</label>
                                <input type="text" id="updateExtent"
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                            <div>
                                <label htmlFor="updateFieldImg1"
                                       className="block text-sm font-medium text-gray-700">Field
                                    Image 1:</label>
                                <input type="file" id="updateFieldImg1"
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                            <div>
                                <label htmlFor="updateFieldImg2"
                                       className="block text-sm font-medium text-gray-700">Field
                                    Image 2:</label>
                                <input type="file" id="updateFieldImg2"
                                       className="mt-1 block w-full border rounded-md p-2"/>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" id="saveUpdatedField"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Update
                                </button>
                                <button type="button" id="closeUpdateModalBtn"
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}