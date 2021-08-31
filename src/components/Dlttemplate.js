import React from 'react'


function Dlttemplate() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Import Group Contact</strong>
                       </div>
                    <div className="card-body">
                    
                    <button className="btn btn-outline-success me-2">Excel Upload</button>
                    <button className="btn btn-outline-danger"><i className="fa fa-upload"></i> Import</button>
                    <p className="mt-3">Please Specify File in the Sample Format </p>
                    <p className="mt-3"><i className="fa fa-download"></i> Download Excel format</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dlttemplate
