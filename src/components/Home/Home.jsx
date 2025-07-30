import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";

export default function Home() {
    return (
        <>
            <div className="jumbotron p-4 p-md-5 " style={{ backgroundColor: '#FCCC00' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="display-4 mb-3" style={{ color: '#C82716' }}>Welcome to Los Pollos Hermanos!</h1>
                    <h2 className="display-7 mb-3" style={{ color: '#C82716' }}>Where something delicious is always cooking</h2>
                    <br></br>
                    <br></br>
                    <button className="btn btn-lg"
                        style={{ backgroundColor: '#C82716', color: 'white', marginBottom: '50px' }}
                        onClick={() => window.location.href = '/menu'}>
                        View Our Menu
                    </button>
                </div>
                <MDBContainer>
                    <div className="ratio ratio-16x9" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginBottom: '50px' }}>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/B9RgougnhiE?si=6-mUlB-wuvx36Oh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </MDBContainer>
            </div>
        </>
    )
}