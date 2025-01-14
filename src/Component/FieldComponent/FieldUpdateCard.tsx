export default function FieldUpdateCard() {
    return(
        <>
            <div id="updateFieldModal" className="modal" style={{display: 'none'}}>
                <div className="modal-overlay">X</div>
                <div className="modal-content">
                    <h3>Update Field Details</h3>
                    <div className="form-group">
                        <label htmlFor="updateName">Name:</label>
                        <input type="text" id="updateName" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="updateLocation">Location:</label>
                        <input type="text" id="updateLocation" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="updateExtent">Extent Size:</label>
                        <input type="text" id="updateExtent" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="updateFieldImg1">Field Image 1:</label>
                        <input type="file" id="updateFieldImg1" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="updateFieldImg2">Field Image 2:</label>
                        <input type="file" id="updateFieldImg2" className="form-control"/>
                    </div>
                    <div className="button-group">
                        <button id="saveUpdatedField" className="btn btn-success">Update</button>
                        <button className="btn btn-secondary" id="closeUpdateModalBtn">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}