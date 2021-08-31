import React from 'react'
import {Link} from 'react-router-dom'

function Addsenderid() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Add white list</strong>
                        <Link to="/requestsenderid"><button className="btn btn-outline-success pull-right" >Back</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Sender Id </label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">SMS Type</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Transactional</option>
                        <option >Promotional</option>
                        
                    </select>
                    </div>
                    
                    <button className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addsenderid
