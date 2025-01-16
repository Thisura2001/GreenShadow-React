export default function VehicleHeader(){
    return(
        <>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-70px] text-green-600 animate-fade-in">
                Vehicle Management
            </h2>
            <div className="flex justify-end mb-4">
                <button id="addVehicleBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
                    <span>Add New Vehicle</span>
                </button>
            </div>
        </>
    )
}