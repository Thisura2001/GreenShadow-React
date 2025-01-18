export default function LogAdd(){
    return(
        <>
            <div className="hidden bg-white shadow-lg rounded-lg w-full max-w-xl mt-20 " id="logFormCard">
                <div className="flex justify-between items-center p-4 border-b">
                    <h4 className="text-lg font-bold">Log Details</h4>
                    <button className="text-gray-500 text-2xl" id="closeLogForm">X</button>
                </div>
                <div className="p-4">
                    <form id="logForm" className="space-y-4">
                        <div>
                            <label htmlFor="logDate" className="block font-medium">Log Date</label>
                            <input type="date" id="logDate" className="w-full border rounded-lg p-2" required/>
                        </div>
                        <div>
                            <label htmlFor="logDetails" className="block font-medium">Log Details /
                                Observation</label>
                            <textarea id="logDetails" className="w-full border rounded-lg p-2"
                                      placeholder="Enter observations" required></textarea>
                        </div>
                        <div>
                            <label htmlFor="observedImage" className="block font-medium">Observed Image</label>
                            <input type="file" id="observedImage" className="w-full border rounded-lg p-2"
                                   accept="image/*"/>
                        </div>
                        <button type="submit"
                                className="btn btn-success bg-green-500 text-white px-4 py-2 rounded-lg">
                            Save <i className="fa-regular fa-floppy-disk ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}