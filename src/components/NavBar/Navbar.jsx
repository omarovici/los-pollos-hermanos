import React from 'react'
import lphLogo from '../../assets/lph-logos.png'
import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#00226b' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <img src={lphLogo} height={150} alt="Los Pollos Hermanos Logo" loading="lazy" style={{ marginLeft: '50px' }} />
                    </a>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row mx-auto" style={{ gap: '100px' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="/"
                                style={{ fontSize: '30px', color: 'white', transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.target.style.color = '#fcc000'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/menu"
                                style={{ fontSize: '30px', color: 'white', transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.target.style.color = '#fcc000'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}>
                                Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about"
                                style={{ fontSize: '30px', color: 'white', transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.target.style.color = '#fcc000'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}>
                                About Us
                            </a>
                        </li>
                    </ul>
                    <div style={{ width: '170px' }}></div> 
                </div>
            </nav>
        </>
    )
}
