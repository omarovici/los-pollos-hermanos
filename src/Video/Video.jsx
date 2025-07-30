import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";


export default function Video() {
    return (
        <MDBContainer>
            <div className="ratio ratio-16x9" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginBottom: '50px' }}>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/B9RgougnhiE?si=6-mUlB-wuvx36Oh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </MDBContainer>

    )
}
