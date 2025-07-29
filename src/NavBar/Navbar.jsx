import React from 'react'
import lphLogo from '../assets/Images/lph-logos.png'

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#00226b'}}>
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img src={lphLogo} height={150} alt="Los Pollos Hermanos Logo" loading="lazy" />
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Icon */}
                        <a className="link-secondary me-3" href="#">
                            <i className="fas fa-shopping-cart" />
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}

        </>
    )
}
