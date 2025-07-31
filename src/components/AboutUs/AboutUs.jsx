import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";

export default function AboutUs() {
    return (
        <>
            <div className="jumbotron p-4 p-md-5" style={{ backgroundColor: '#FCCC00', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 className="display-4 mb-3" style={{ color: '#C82716' }}>Get to Know Us</h1>
                    <h2 className="display-7 mb-3" style={{ color: '#C82716' }}>How Los Pollos Hermanos Chicken Is Made</h2>
                </div>
                <MDBContainer>
                    <div className="ratio ratio-16x9" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginBottom: '50px' }}>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c1u8jEPG71U?si=qMsVYe-7jDR_PUSJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </MDBContainer>
            </div>
        </>
    )
}
