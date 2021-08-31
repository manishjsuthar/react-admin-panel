import React from 'react'
import {Link} from 'react-router-dom'
import './Mystyle.css';

function Smstemplate() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>SMS Template</strong> 
                        <Link to="/newmessagetemplate"><button className="btn btn-outline-success pull-right">Add Template</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Sr. no.</th>
                            <th scope="col">Temp ID</th>
                            <th scope="col">Temp Name</th>
                            <th scope="col">Message</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>80</td>
                            <td>Test</td>
                            <td>test message</td>
                            <td className="ymen"> <button className="btn btn-success fa fa-pencil "></button> <button className="btn btn-danger fa fa-trash "></button></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>81</td>
                            <td>TEST</td>
                            <td>test MESSAGE</td>
                            <td className="ymen"> <button className="btn btn-success fa fa-pencil "></button> <button className="btn btn-danger fa fa-trash "></button></td>
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

export default Smstemplate
