import React, { useState } from 'react'
import lphLogo from '../../assets/lph-logos.png'
import { MDBIcon } from 'mdb-react-ui-kit';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <a className={styles.navbarBrand} href="/">
                        <img
                            src={lphLogo}
                            alt="Los Pollos Hermanos Logo"
                            loading="lazy"
                            className={styles.logo}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/">
                                Home
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/menu">
                                Menu
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/about">
                                About Us
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.mobileToggle}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <MDBIcon fas icon={isMobileMenuOpen ? "times" : "bars"} />
                    </button>

                    {/* Spacer for desktop layout */}
                    <div className={styles.spacer}></div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <ul className={styles.mobileNavList}>
                        <li className={styles.mobileNavItem}>
                            <a
                                className={styles.mobileNavLink}
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li className={styles.mobileNavItem}>
                            <a
                                className={styles.mobileNavLink}
                                href="/menu"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Menu
                            </a>
                        </li>
                        <li className={styles.mobileNavItem}>
                            <a
                                className={styles.mobileNavLink}
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
