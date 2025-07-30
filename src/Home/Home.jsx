import React from 'react'
import Video from '../Video/Video'

export default function Home() {
    return (
        <>
            <div className="jumbotron p-4 p-md-5 rounded" style={{ backgroundColor: '#FCCC00', minHeight: '900px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="display-4 mb-3" style={{ color: '#C82716' }}>Welcome to Los Pollos Hermanos!</h1>
                    <h2 className="display-7 mb-3" style={{ color: '#C82716' }}>Where something delicious is always cooking</h2>
                    <br></br>
                    <br></br>
                    <button className="btn btn-lg"
                        style={{ backgroundColor: '#C82716', color: 'white', marginBottom: '50px' }}>
                        View Our Menu
                    </button>
                </div>
                <Video />
            </div>
        </>
    )
}