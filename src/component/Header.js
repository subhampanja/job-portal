import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <NavLink className="navbar-brand text-white" to="/">Job Portal</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 d-flex justify-content-end">
                        <NavLink to="/shortlisted" >
                            <li className="nav-item">
                                <button className="nav-link btn btn-primary text-white mr-4">ShortListed</button>
                            </li>
                        </NavLink>
                        <NavLink to="/rejected">
                        <li className="nav-item">
                            <button className="nav-link btn btn-danger text-white">Rejected</button>
                        </li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
