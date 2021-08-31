import React from 'react'
import {Link} from 'react-router-dom'
function Newgroup() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>New Group</strong>
                        <Link to="/grouplist"><button className="btn btn-outline-success pull-right" >Back</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Group Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Remarks</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newgroup
