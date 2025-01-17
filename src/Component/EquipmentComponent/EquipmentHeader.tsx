export default function EquipmentHeader(){
    return(
        <>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-250px] text-green-600 animate-fade-in">
                Equipment Management <i className="fa-solid fa-screwdriver-wrench"></i>
            </h2>
            <div className="flex justify-end w-full mb-4">
                <button id="addEquipmentBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add New Equipment
                </button>
            </div>
        </>
    )
}