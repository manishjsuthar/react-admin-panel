import React from 'react'
import {Link}  from 'react-router-dom';
import './Mystyle.css';

function Grouplist() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                    <div className="xmen">
                        <strong>Group List</strong>
                        
                        <Link to="/importgroupcontact"><button className="btn btn-outline-danger pull-right me-1" ><i className="fa fa-upload"></i> Import</button></Link>
                        <Link to="/newgroup"><button className="btn btn-outline-success pull-right me-1" ><i className="fa fa-plus"></i> Add Group</button></Link>
                        <Link to="/addcontact"><button className="btn btn-outline-success pull-right me-1" ><i className="fa fa-address-book"></i> Add Contact</button></Link>
                        </div>
                        </div>
                    <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Sr. no.</th>
                            <th scope="col">Group Name</th>
                            <th scope="col">No of Contact</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Demo</td>
                            <td>1</td>
                            <td>test group</td>
                            <td className="ymen"><button className="btn btn-info fa fa-eye "></button> <button className="btn btn-success fa fa-file "></button> <button className="btn btn-danger fa fa-trash "></button></td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Demo</td>
                            <td>1</td>
                            <td>test group</td>
                            <td className="ymen"><button className="btn btn-info fa fa-eye "></button> <button className="btn btn-success fa fa-file "></button> <button className="btn btn-danger fa fa-trash "></button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Grouplist
