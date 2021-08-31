import React from 'react'
import {Link} from 'react-router-dom'

function Ipwhitelist() {
    return (
        <div className="content-page">
            <div className="content mx-2">
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <strong>Ip white list</strong>
                        <Link to="/addwhitelist"><button className="btn btn-outline-success pull-right" >Add White List</button></Link>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Sr. no.</th>
                            <th scope="col">IP Address</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>192.168.43.64</td>
                            <td>bhudfinck</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>192.168.43.64</td>
                            <td>bhudfinck</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
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

export default Ipwhitelist
