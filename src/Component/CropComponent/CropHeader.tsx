export default function CropHeader() {
    return (
        <>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-70px] text-green-600 animate-fade-in">
                Crop Management
            </h2>
            <div className="flex justify-end mb-6">
                <button id="addCropBtn"
                        className="btn-primary font-bold text-base px-5 py-2 mr-5 bg-blue-600 text-white rounded-lg">Add
                    New Crop
                </button>
            </div>
        </>
    )
}