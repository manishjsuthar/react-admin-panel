import React from 'react'

function Advancedbulksms() {
    return (
        <div>
            <div className="content-page">
                <div className="content mx-2">

                    <div className="card ">
                        <div className="card-header text-center bg-dark text-light">
                            <strong>Advanced Bulk SMS</strong>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-10">

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
                                                    Default checkbox
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
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Default checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-3">
                                        <div className="col">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">DLT templates</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                        <div className="col">
                                            <div>
                                                <label htmlFor="exampleInputEmail1" className="form-label">Template ID</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label>Message</label>
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="myBox" style={{ "height": "100px" }} />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary mt-3">Send</button>
                                </div>
                                <div className="col-lg-4 col-md-10 ms-3 mt-3">
                                    <h4>Contact group</h4>
                                    <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Demo(1)
                                                </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advancedbulksms
