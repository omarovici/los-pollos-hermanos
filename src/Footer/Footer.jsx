import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundColor: '#00226b' }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 ' style={{ backgroundColor: '#00226b' }}>
                <div className='me-5 d-none d-lg-block' style={{ color: 'white' }}>
                    <span>Get connected with me on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/omar.khalid.492185/' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" style={{ color: 'white' }} />
                    </a>
                    <a href='https://x.com/omarovici' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" style={{ color: 'white' }} />
                    </a>
                    <a href='mailto:omarkhalidsaber042004@gmail.com' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" style={{ color: 'white' }} />
                    </a>
                    <a href='https://www.instagram.com/omarovici/' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" style={{ color: 'white' }} />
                    </a>
                    <a href='https://www.linkedin.com/in/omarovici/' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" style={{ color: 'white' }} />
                    </a>
                    <a href='https://github.com/omarovici' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" style={{ color: 'white' }} />
                    </a>
                </div>
            </section>
            <div className='text-center p-4' style={{ backgroundColor: '#00226b', color: 'white' }}>
                Inspired by Breaking Bad and Better Call Saul, this project is a love letter to the iconic Los Pollos Hermanos restaurant.
            </div>

        </MDBFooter>
    )
}
