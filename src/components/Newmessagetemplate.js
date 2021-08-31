import React from 'react'
import {Link} from 'react-router-dom'

function Newmessagetemplate() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Add Contact</strong>
                        <Link to="/smstemplate"><button className="btn btn-outline-success pull-right" >Back</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Unicode
                                    </label>
                                </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                            <label>Message</label>
                            <div className="form-floating">
                                <textarea className="form-control" id="floatingTextarea1" style={{ "height": "100px" }} defaultValue={""} />
                            </div>
                    </div>
                    <p><span className="text-danger">Example:</span> Wish message to <f1></f1> on <f2></f2> birthday</p>
                    <button className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newmessagetemplate
