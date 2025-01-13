import "../Css/Crop.css"

export default function Crop(){

    return(
        <>
            <section id="corp">
                <h2 className="crop-title">Corp Management...
                    <i className="fa-solid fa-leaf"></i>
                </h2>
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-primary" id="addCropBtn">Add New Crop
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="card mt-3" id="cropFormCard" style={{ display: 'none' }}>
                    <div className="card-header">
                        <h4 id="cropFormTitle">Crop Details</h4>
                        <button className="btn-close" id="closeCropForm" onClick={()=>(cropCard.style.display = 'none')}></button>
                    </div>
                    <div className="card-body">
                        <form id="cropForm">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="cropCommonName" className="form-label">Crop Common Name</label>
                                    <input type="text" className="form-control" id="cropCommonName"
                                           placeholder="Enter common name" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cropScientificName" className="form-label">Crop Scientific
                                        Name</label>
                                    <input type="text" className="form-control" id="cropScientificName"
                                           placeholder="Enter scientific name" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cropImageFile" className="form-label">Upload Crop Image</label>
                                    <input type="file" className="form-control" id="cropImageFile" accept="image/*"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cropCategory" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="cropCategory"
                                           placeholder="Enter category (e.g., Cereal)" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cropSeason" className="form-label">Crop Season</label>
                                    <input type="text" className="form-control" id="cropSeason"
                                           placeholder="Enter season" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="fieldIdInCrop" className="form-label">Field ID</label>
                                    <select className="form-select" id="fieldIdInCrop" required>
                                        <option selected disabled value="">Select Field...</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success mt-3" id="cropSaveBtn">Save
                                <i className="fa-regular fa-floppy-disk"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div id="corpCardsContainer" className="d-flex flex-wrap"></div>
                <div id="updateCropModal" className="modal"  style={{ display: 'none' }}>
                    <div className="modal-overlay" onClick="closeUpdateCropModal()">X</div>
                    <div className="modal-content">
                        <h3>Update Crop Details</h3>
                        <div className="form-group">
                            <label htmlFor="updateCropCommonName">Common Name:</label>
                            <input type="text" id="updateCropCommonName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateCropScientificName">Scientific Name:</label>
                            <input type="text" id="updateCropScientificName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateCropCategory">Category:</label>
                            <input type="text" id="updateCropCategory" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateCropSeason">Season:</label>
                            <input type="text" id="updateCropSeason" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateFieldId">Field ID:</label>
                            <input type="text" id="updateFieldId" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateCropImg1">Crop Image:</label>
                            <input type="file" id="updateCropImg1" className="form-control crop-img" accept="image/*"/>
                        </div>
                        <div className="button-group">
                            <button id="saveUpdatedCrop" className="btn btn-success">Update</button>
                            <button className="btn btn-secondary" id="closeUpdateCropModalBtn">Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}