import React from 'react'

function Managekey() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Manage Key</strong>
                    </div>
                    <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">API Key</label>
                        <div className="row">
                            <div className="col">
                            <input type="text" className="form-control" id="exampleInputPassword1" readOnly/>
                            </div>
                            <div className="col">
                            <button className="btn btn-outline-primary me-2">Copy Key</button>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-outline-success"> Generate Key</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Managekey
