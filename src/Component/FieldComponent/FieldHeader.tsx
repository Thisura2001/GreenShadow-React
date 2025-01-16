export default function FieldHeader(){
    return(
        <>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-200px] text-green-600 animate-fade-in">
                Field Management
            </h2>
            <div className="flex justify-end w-full mb-4">
                <button id="addFieldBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add New Field
                </button>
            </div>
        </>
    )
}