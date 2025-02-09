import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import Log from "../Model/Log.ts";
import {deleteLog, getAllLogs, saveLog, toBase64} from "../Reducer/LogSlice.ts";
import Swal from "sweetalert2";

export default function LogForm() {
    const [isLogFormVisible, setLogFormVisible] = useState(false);

    const showLogForm = () => setLogFormVisible(true);
    const hideLogForm = () => setLogFormVisible(false);

    const [id, setId] = useState('')
    const [date, setDate] = useState('')
    const [observationImg, setObservationImg] = useState('')
    const [logDetails, setLogDetails] = useState('')

    const handleImageChange1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            try {
                const base64Image = await toBase64(file);
                setObservationImg(base64Image);

                const previewElement = document.getElementById("fieldImgPreview01");
                if (previewElement) {
                    previewElement.innerHTML = `<img src="${base64Image}" alt="Field Image 01" class="w-full h-auto mt-2" />`;
                }
            } catch (error) {
                console.error("Error converting image to base64: ", error);
            }
        }
    };

    const dispatch = useDispatch<AppDispatch>();
    const logs = useSelector(state => state.logs);

    useEffect(() => {
        if (logs.length === 0){
            dispatch(getAllLogs())
        }
    }, [dispatch,logs.length]);

    function handleSave() {
        const newLog = new Log(Number(id),date,logDetails,observationImg)
        dispatch(saveLog(newLog)).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Log Saved!',
                text: 'The Log has been successfully added.',
                confirmButtonColor: '#3085d6',
            });
        }).catch((error) => {
            console.error('Error adding field: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Save Failed',
                text: 'An error occurred while saving the Log. Please try again.',
            });
        });
    }

    function handleDelete(logId: number) {
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
                dispatch(deleteLog(logId))
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Log Deleted!",
                            text: "The Log has been successfully deleted.",
                            confirmButtonColor: "#3085d6",
                        });
                    })
                    .catch((error) => {
                        console.error("Error deleting Log: ", error);
                        Swal.fire({
                            icon: "error",
                            title: "Delete Failed",
                            text: "An error occurred while deleting the Log. Please try again.",
                        });
                    });
            }
        });
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
                                    <label htmlFor="observedImage" className="block font-medium">
                                        Observed Image
                                    </label>
                                    <input
                                        type="file"
                                        id="observedImage"
                                        className="mt-1 block w-full border rounded-md p-2"
                                        onChange={handleImageChange1}
                                        accept="image/*"
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
                        <th className="border border-gray-300 px-4 py-2">Log id</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Details</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="logTableBody">
                    {logs.map((log:Log)=>(
                        <tr key={log.id}>
                            <td className="py-3 px-6 border-b">{log.id}</td>
                            <td className="py-3 px-6 border-b">{log.log_date}</td>
                            <td className="py-3 px-6 border-b">
                                {log.observationImg && (
                                    <img src={log.observationImg} alt="log img" className="w-16 h-16 object-cover"/>
                                )}
                            </td>
                            <td className="py-3 px-6 border-b">{log.log_details}</td>
                            <td className="py-3 px-6 border-b">
                            <button className="text-red-500 hover:underline"
                                        onClick={() => handleDelete(log.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
