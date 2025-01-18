export default function LogHeader({ onAddLog }) {
    return (
        <>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-300px] text-green-600 animate-fade-in">
                Log Management
                <i className="fa-solid fa-folder ml-2"></i>
            </h2>
            <div className="w-full flex justify-end mb-3">
                <button
                    className="btn-primary font-bold text-base px-5 py-2 mr-5 bg-blue-600 text-white rounded-lg"
                    onClick={onAddLog}
                >
                    Add New Log <i className="fa-solid fa-plus ml-2"></i>
                </button>
            </div>
        </>
    );
}
