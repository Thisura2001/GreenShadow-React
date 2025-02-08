import { useState } from "react";

export default function Log() {
    const [isLogFormVisible, setLogFormVisible] = useState(false);

    const showLogForm = () => setLogFormVisible(true);
    const hideLogForm = () => setLogFormVisible(false);

    const [logId, setLogId] = useState('')
    const [date, setDate] = useState('')
    const [logImg, setLogImg] = useState('')
    const [logDetails, setLogDetails] = useState('')

    function handleImageChange1() {

    }

    function handleSave() {

    }

    return (
        <>
            <section
                id="monitory"
                className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            >
                <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-300px] text-green-600 animate-fade-in">
                    Log Management
                    <i className="fa-solid fa-folder ml-2"></i>
                </h2>
                <div className="w-full flex justify-end mb-3">
                    <button
                        className="btn-primary font-bold text-base px-5 py-2 mr-5 bg-blue-600 text-white rounded-lg"
                        onClick={showLogForm}
                    >
                        Add New Log <i className="fa-solid fa-plus ml-2"></i>
                    </button>
                </div>

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
                                        onChange={(e) => setDate(e.target.value)}
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
                                        onChange={(e) => setLogDetails(e.target.value)}
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
                                        onChange={handleImageChange1}
                                        accept="image/*"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success bg-green-500 text-white px-4 py-2 rounded-lg"
                                    onClick={handleSave}
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
                        <th className="border border-gray-300 px-4 py-2">Log Id</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Details</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="logTableBody">

                    </tbody>
                </table>
            </section>
        </>
    );
}
