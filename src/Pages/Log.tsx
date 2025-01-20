import { useState } from "react";
import LogHeader from "../Component/MonitoringLogComponent/LogHeader.tsx";
import LogAdd from "../Component/AddCardComponent/LogAdd.tsx";
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
                <LogHeader onAddLog={showLogForm}/>
                {isLogFormVisible && <LogAdd onClose={hideLogForm}/>}
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
