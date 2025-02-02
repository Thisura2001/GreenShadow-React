import { useState } from "react";
import LogHeader from "../Component/MonitoringLogComponent/LogHeader.tsx";

export default function Log() {
    const [isLogFormVisible, setLogFormVisible] = useState(false);

    const showLogForm = () => setLogFormVisible(true);
    const hideLogForm = () => setLogFormVisible(false);

    return (
        <>
            <section
                id="monitory"
                className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            >
                <LogHeader onAddLog={showLogForm} />

                {isLogFormVisible && (
                    <div className="bg-white shadow-lg rounded-lg w-full max-w-xl mt-20" id="logFormCard">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h4 className="text-lg font-bold">Log Details</h4>
                            <button
                                className="text-gray-500 text-2xl"
                                id="closeLogForm"
                                onClick={hideLogForm}
                            >
                                X
                            </button>
                        </div>
                        <div className="p-4">
                            <form id="logForm" className="space-y-4">
                                <div>
                                    <label htmlFor="logDate" className="block font-medium">
                                        Log Date
                                    </label>
                                    <input
                                        type="date"
                                        id="logDate"
                                        className="w-full border rounded-lg p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="logDetails" className="block font-medium">
                                        Log Details / Observation
                                    </label>
                                    <textarea
                                        id="logDetails"
                                        className="w-full border rounded-lg p-2"
                                        placeholder="Enter observations"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <label htmlFor="observedImage" className="block font-medium">
                                        Observed Image
                                    </label>
                                    <input
                                        type="file"
                                        id="observedImage"
                                        className="w-full border rounded-lg p-2"
                                        accept="image/*"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success bg-green-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Save <i className="fa-regular fa-floppy-disk ml-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <table className="table-auto border-collapse border border-gray-300 w-full max-w-3xl mt-6 text-center">
                    <thead className="bg-teal-600 text-white">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Details</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="logTableBody">
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">2025-01-01</td>
                        <td className="py-3 px-6 border-b">
                            <img
                                src="../assets/farmer.jpg"
                                alt="Log"
                                className="w-12 h-12 object-cover rounded"
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Asperiores beatae commodi doloremque incidunt minima modi quia,
                            repellendus. Asperiores, atque iste nobis officia praesentium quae quaerat, quas sequi unde,
                            veritatis vero?
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
