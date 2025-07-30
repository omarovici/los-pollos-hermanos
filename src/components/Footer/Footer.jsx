import React from 'react'
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <MDBFooter className={styles.footer}>
            <section className={styles.footerSection}>
                <div className={styles.socialText}>
                    <span>Get connected with me on social networks:</span>
                </div>

                <div className={styles.socialIcons}>
                    <a href='https://www.facebook.com/omar.khalid.492185/' className={styles.socialLink}>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='https://x.com/omarovici' className={styles.socialLink}>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='mailto:omarkhalidsaber042004@gmail.com' className={styles.socialLink}>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='https://www.instagram.com/omarovici/' className={styles.socialLink}>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='https://www.linkedin.com/in/omarovici/' className={styles.socialLink}>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='https://github.com/omarovici' className={styles.socialLink}>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>
            <div className={styles.footerText}>
                Inspired by Breaking Bad and Better Call Saul, this project is a love letter to the iconic Los Pollos Hermanos restaurant.
            </div>

        </MDBFooter>
    )
}
