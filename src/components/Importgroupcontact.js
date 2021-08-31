import React from 'react'
import {Link} from 'react-router-dom'
function Importgroupcontact() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Import Group Contact</strong>
                        <Link to="/grouplist"><button className="btn btn-outline-success pull-right" >Back</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Group</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <button className="btn btn-outline-success me-2">Excel Upload</button>
                    <button className="btn btn-outline-danger"><i className="fa fa-upload"></i> Import</button>
                    <p className="mt-3"><i className="fa fa-download"></i> Download csv format</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Importgroupcontact
