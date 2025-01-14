import {useEffect} from "react";

export default function AddField(){
    useEffect(() => {
        const fieldFormCard = document.getElementById("fieldFormCard") as HTMLElement;
        const addFieldBtn = document.getElementById('addFieldBtn') as HTMLButtonElement;

        if (addFieldBtn) {
            addFieldBtn.addEventListener('click', () => {
                fieldFormCard.style.display = 'block';
            });
        }
    }, []);
    return(
        <>
            <div className="card mt-3" id="fieldFormCard" style={{display: 'none'}}>
                <div className="card-header">
                    <h4>Add Field Details</h4>
                    <button className="btn-close" id="closeFieldForm"
                            onClick={() => (fieldFormCard.style.display = 'none')}>X
                    </button>
                </div>
                <div className="card-body">
                    <form id="FieldForm">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="fieldName" className="form-label">Field Name</label>
                                <input type="text" className="form-control" id="fieldName"
                                       placeholder="Enter Field name" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="location" className="form-label">Filed Location</label>
                                <input type="text" className="form-control" id="location"
                                       placeholder="Enter Field Location" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="extent" className="form-label">Filed extent</label>
                                <input type="text" className="form-control" id="extent"
                                       placeholder="Enter Field extent" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="fieldImg01" className="form-label">Field Image 01</label>
                                <input type="file" className="form-control" id="fieldImg01" accept="image/*"/>
                                <div id="fieldImgPreview01" style={{marginTop: '10px'}}></div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="fieldImg02" className="form-label">Field Image 02</label>
                                <input type="file" className="form-control" id="fieldImg02" accept="image/*"/>
                                <div id="fieldImgPreview02" style={{marginTop: '10px'}}></div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-3" id="fieldSaveBtn">Save
                            <i className="fa-regular fa-floppy-disk"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}