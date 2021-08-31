import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
   
        return (
            <div>
                <div className="leftside-menu">
                {/* LOGO */}
                <a href="index.html" className="logo text-center logo-light">
                    <span className="logo-lg bg-light">
                        <img src="https://soft-techsolutions.com/assets/img/logo/logo.png?id=22" alt="" height={40} />
                    </span>
                    <span className="logo-sm bg-light">
                        <img src="https://soft-techsolutions.com/assets/img/logo/logo.png?id=22s" alt="" height={18} />
                    </span>
                </a>
                {/* LOGO */}
                <a href="index.html" className="logo text-center logo-dark">
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height={16} />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm_dark.png" alt="" height={16} />
                    </span>
                </a>
                <div className="h-100" id="leftside-menu-container" data-simplebar>
                    {/*- Sidemenu */}
                    <ul className="side-nav">
                        
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <i className="fa fa-tachometer" />
                                <span> Dashboard </span>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
                                <i className="fa fa-user"></i>
                                
                                <span> User Option </span>
                            </a>
                            <div className="collapse" id="sidebarDashboards">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/requestsenderid">Request Sender ID</Link>
                                    </li>
                                    <li>
                                        <a href="dashboard-crm.html">API Document</a>
                                    </li>
                                    <li>
                                        <Link to="/ipwhitelist">IP White List</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                     
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
                                <i className="fa fa-comments" />
                                <span> Message Manager </span>
                               
                            </a>
                            <div className="collapse" id="sidebarEcommerce">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/bulksms">Bulk SMS</Link>
                                    </li>
                                    <li>
                                        <Link to="/advancedbulksms">Advanced Bulk Message</Link>
                                    </li>
                                    <li>
                                        <Link to="/importsms">Import SMS</Link>
                                    </li>
                                    <li>
                                        <Link to="/importsmsusingtemplate">Import SMS using templates</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" className="side-nav-link">
                                <i className="fa fa-address-book" />
                                <span> Contact & Group Manager </span>
                                
                            </a>
                            <div className="collapse" id="sidebarProjects">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/grouplist">Message Group & Contact</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
                                <i className="fa fa-th" />
                                <span> Admin Manager </span>
                               
                            </a>
                            <div className="collapse" id="sidebarEmail">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="apps-email-inbox.html">Reconcillation Import Excel</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Manager Seller</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Manager User Route</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Seller Recharge</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Manager Sender ID</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarUtility" aria-expanded="false" aria-controls="sidebarUtility" className="side-nav-link">
                                <i className="fa fa-envelope-open-o" />
                                <span> Utilities Manager </span>
                                
                            </a>
                            <div className="collapse" id="sidebarUtility">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/dlttemplate">DLT Template</Link>
                                    </li>
                                    <li>
                                        <Link to="/managekey">Manage Key</Link>
                                    </li>
                                    <li>
                                        <Link to="/smstemplate">SMS Template</Link>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">User Recharge</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Manage Profile</a>
                                    </li>
                                
                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarReport" aria-expanded="false" aria-controls="sidebarReport" className="side-nav-link">
                                <i className="fa fa-area-chart" />
                                <span> Report Manager </span>
                               
                            </a>
                            <div className="collapse" id="sidebarReport">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="apps-email-inbox.html">Download SMS Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Bulk SMS pending Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Scheduler Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Template ID missing Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Today Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-inbox.html">Day wise Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Month Wise Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Date Summary Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Daily Summary Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Monthly Summary Report</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarSellerReport" aria-expanded="false" aria-controls="sidebarSellerReport" className="side-nav-link">
                                <i className="fa fa-file" />
                                <span> Seller Report Manager</span>
                               
                            </a>
                            <div className="collapse" id="sidebarSellerReport">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="apps-email-inbox.html">Seller Today Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Seller Wise Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Seller Summary Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Seller Balance Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Seller User-Wise Report</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarCreditReport" aria-expanded="false" aria-controls="sidebarCreditReport" className="side-nav-link">
                                <i className="fa fa-bar-chart" />
                                <span>Credit Report Manager</span>
                               
                            </a>
                            <div className="collapse" id="sidebarCreditReport">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="apps-email-inbox.html">Recharge Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Balance Report</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Reconcillation Report</a>
                                    </li>  
                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a href="apps-social-feed.html" className="side-nav-link">
                                <i className="fa fa-newspaper-o" />
                                <span> News </span>
                            </a>
                        </li>
                        <li className="side-nav-item">
                            <a href="apps-social-feed.html" className="side-nav-link">
                                <i className="fa fa-sign-out" />
                                <span> Logout </span>
                            </a>
                        </li>
                    </ul>
                   
                </div>
                {/* Sidebar -left */}
            </div>
            </div>
        )
    }


export default Sidebar
