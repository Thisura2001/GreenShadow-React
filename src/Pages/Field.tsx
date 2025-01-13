import "../Css/Field.css";
import { useEffect } from "react";

export default function Field() {
    useEffect(() => {
        const fieldFormCard = document.getElementById("fieldFormCard") as HTMLElement;
        const addFieldBtn = document.getElementById('addFieldBtn') as HTMLButtonElement;

        if (addFieldBtn) {
            addFieldBtn.addEventListener('click', () => {
                fieldFormCard.style.display = 'block';
            });
        }
    }, []);

    return (
        <>
            <section id="field">
                <h2 className="field-title">Field Management...
                    <i className="fa-brands fa-pagelines"></i>
                </h2>
                <div className="d-flex justify-content-end mb-3">
                    <button className="bg-blue-600 text-white" id="addFieldBtn">Add New Field
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="card mt-3" id="fieldFormCard" style={{ display: 'none' }}>
                    <div className="card-header">
                        <h4>Add Field Details</h4>
                        <button className="btn-close" id="closeFieldForm" onClick={() => (fieldFormCard.style.display = 'none') }></button>
                    </div>
                    <div className="card-body">
                        <form id="FieldForm">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="fieldName" className="form-label">Field Name</label>
                                    <input type="text" className="form-control" id="fieldName"
                                           placeholder="Enter Field name" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="location" className="form-label">Filed Location</label>
                                    <input type="text" className="form-control" id="location"
                                           placeholder="Enter Field Location" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="extent" className="form-label">Filed extent</label>
                                    <input type="text" className="form-control" id="extent"
                                           placeholder="Enter Field extent" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="fieldImg01" className="form-label">Field Image 01</label>
                                    <input type="file" className="form-control" id="fieldImg01" accept="image/*" />
                                    <div id="fieldImgPreview01" style={{ marginTop: '10px' }}></div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="fieldImg02" className="form-label">Field Image 02</label>
                                    <input type="file" className="form-control" id="fieldImg02" accept="image/*" />
                                    <div id="fieldImgPreview02" style={{ marginTop: '10px' }}></div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success mt-3" id="fieldSaveBtn">Save
                                <i className="fa-regular fa-floppy-disk"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div id="fieldCardsContainer" className="d-flex flex-wrap"></div>
                <div id="updateFieldModal" className="modal" style={{ display: 'none' }}>
                    <div className="modal-overlay" >X</div>
                    <div className="modal-content">
                        <h3>Update Field Details</h3>
                        <div className="form-group">
                            <label htmlFor="updateName">Name:</label>
                            <input type="text" id="updateName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateLocation">Location:</label>
                            <input type="text" id="updateLocation" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateExtent">Extent Size:</label>
                            <input type="text" id="updateExtent" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateFieldImg1">Field Image 1:</label>
                            <input type="file" id="updateFieldImg1" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateFieldImg2">Field Image 2:</label>
                            <input type="file" id="updateFieldImg2" className="form-control" />
                        </div>
                        <div className="button-group">
                            <button id="saveUpdatedField" className="btn btn-success">Update</button>
                            <button className="btn btn-secondary" id="closeUpdateModalBtn" >Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
