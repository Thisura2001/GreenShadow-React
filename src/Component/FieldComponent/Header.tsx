export default function FieldHeader(){
    return(
        <>
            <h2 className="field-title">Field Management...
                <i className="fa-brands fa-pagelines"></i>
            </h2>
            <div className="d-flex justify-content-end mb-3">
                <button className="bg-blue-600 text-white" id="addFieldBtn">Add New Field</button>
            </div>
        </>
    )
}