import React from 'react'

function Navbar() {
   
        return (
            <div className="content-page">
            <div className="content">
            {/* Topbar Start */}
            <div className="navbar-custom">
                <ul className="list-unstyled topbar-menu float-end mb-0">
                    <li className="dropdown notification-list d-lg-none">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="fa fa-search fa-2x mt-3" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                            <form className="p-3">
                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                            </form>
                        </div>
                    </li>


                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="account-user-avatar">
                                <img src="img/user.jpg" alt="userimage" className="rounded-circle" />
                            </span>
                            <span>
                                <span className="account-user-name">Alex</span>
                                <span className="account-position">Founder</span>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                            {/* item*/}
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fa fa-user me-1" />
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fa fa-cog me-1" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fa fa-lock me-1" />
                                <span>Change Password</span>
                            </a>
                            {/* item*/}

                            <a href="/" className="dropdown-item notify-item">
                                <i className="fa fa-sign-out me-1" />
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <button className="button-menu-mobile open-left">
                    <i className="fa fa-bars" />
                </button>
                <div className="app-search dropdown d-none d-lg-block">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />

                            <button className="input-group-text btn-primary" type="submit">Search</button>
                        </div>
                    </form>
                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                        {/* item*/}
                        <div className="dropdown-header noti-title">
                            <h5 className="text-overflow mb-2">Found <span className="text-danger">3</span> results</h5>
                        </div>
                        {/* item*/}
                        <a href="/" className="dropdown-item notify-item">
                            <i className="uil-notes font-16 me-1" />
                            <span>Analytics Report</span>
                        </a>
                        {/* item*/}
                        <a href="/" className="dropdown-item notify-item">
                            <i className="uil-life-ring font-16 me-1" />
                            <span>How can I help you?</span>
                        </a>
                        {/* item*/}
                        <a href="/" className="dropdown-item notify-item">
                            <i className="uil-cog font-16 me-1" />
                            <span>User profile settings</span>
                        </a>
                        {/* item*/}
                    </div>
                </div>
            </div>
            {/* end Topbar */}
            </div>
            </div>
        )
    }


export default Navbar
