import React from 'react'
import {Link} from 'react-router-dom'

function Addwhitelist() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Add white list</strong>
                        <Link to="/ipwhitelist"><button className="btn btn-outline-success pull-right" >Back</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Ip address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="XXX.XXX.XXX.XXX"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addwhitelist
