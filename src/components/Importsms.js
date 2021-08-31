import React from 'react'

function Importsms() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header text-center bg-dark text-light">
                        <strong>Bulk SMS</strong>
                    </div>
                    <div className="card-body">
                        <p className="text-danger">Note: If you are sending bulk SMS, please check one sms on your mobile number</p>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="exampleFormControlInput1" className="form-label">SMS Types</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Unicode
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Schedule
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Sender ID</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            
                        </div>
                        <button className="btn btn-outline-success my-3">Excel Upload</button>
                        <p>Please specify file in the sms Format like (Mobile Number, Message, Template ID)</p>
                        <p><i class="fa fa-download" aria-hidden="true"></i>Download Excel Format</p>
                        <button className="btn btn-outline-danger mt-3"><i class="fa fa-upload" aria-hidden="true"></i>Import</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Importsms
