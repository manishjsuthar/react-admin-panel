import React from 'react'
import {Link} from 'react-router-dom'

function Addcontact() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Add Contact</strong>
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
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addcontact
