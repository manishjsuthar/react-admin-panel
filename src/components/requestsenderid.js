import React from 'react'
import {Link} from 'react-router-dom'
function requestsenderid() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Sender ID List</strong>
                        <Link to="/addsenderid"><button className="btn btn-outline-success pull-right" >Add Sender ID</button></Link>
                   
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Sr. no.</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Sender ID</th>
                            <th scope="col">Sender Type</th>
                            <th scope="col">Request Date</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>TRANSACTIONAL</td>
                            <td>20-10-03</td>
                            <td>PENDING</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>PROMOTIONAL</td>
                            <td>20-10-03</td>
                            <td>APPROVED</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>PROMOTIONAL</td>
                            <td>20-10-03</td>
                            <td>PENDING</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>TRANSACTIONAL</td>
                            <td>20-10-03</td>
                            <td>APPROVED</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>TRANSACTIONAL</td>
                            <td>20-10-03</td>
                            <td>APPROVED</td>
                            </tr>
                            <tr>
                            <th scope="row">6</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>TRANSACTIONAL</td>
                            <td>20-10-03</td>
                            <td>APPROVED</td>
                            </tr>
                            <tr>
                            <th scope="row">7</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>TRANSACTIONAL</td>
                            <td>20-10-03</td>
                            <td>APPROVED</td>
                            </tr>
                            <tr>
                            <th scope="row">8</th>
                            <td>DEMOID</td>
                            <td>ADMIN</td>
                            <td>TRANSACTIONAL</td>
                            <td>20-10-03</td>
                            <td>APPROVED</td>
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

export default requestsenderid
