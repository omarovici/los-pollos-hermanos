import React from 'react'
import lphLogo from '../assets/Images/lph-logos.png'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#00226b' }}>
                <div className="container-fluid">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img src={lphLogo} height={150} alt="Los Pollos Hermanos Logo" loading="lazy" style={{ marginLeft: '50px' }} />
                    </a>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row" style={{ gap: '100px' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="#"
                                style={{ fontSize: '30px', color: 'white', transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.target.style.color = '#fcc000'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"
                                style={{ fontSize: '30px', color: 'white', transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.target.style.color = '#fcc000'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}>
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"
                                style={{ fontSize: '30px', color: 'white', transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.target.style.color = '#fcc000'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}>
                                About Us
                            </a>
                        </li>
                    </ul>
                    {/* <div className="d-flex align-items-center">
                        <a className="link-secondary me-3" href="#" >
                            <i className="fas fa-shopping-cart" />
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                    </div> */}
                </div>
            </nav>
        </>
    )
}
