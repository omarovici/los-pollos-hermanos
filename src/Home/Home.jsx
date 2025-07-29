import React from 'react'

export default function Home() {
    return (
        <>
            <div className="jumbotron p-4 p-md-5 rounded" style={{ backgroundColor: '#FCCC00', minHeight: '1000px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="display-4 mb-3" style={{ color: '#C82716' }}>Welcome to Los Pollos Hermanos!</h1>
                    <h2 className="display-7 mb-3" style={{ color: '#C82716' }}>Where something delicious is always cooking</h2>
                    <br></br>
                    <br></br>
                    {/* <p className="lead" style={{color: '#C82716'}}>
          This is a simple React application built with Vite, Bootstrap, and Fake Store API.
        </p>
        <hr className="my-4" />
        <p className="mb-4" style={{color: '#C82716'}}>
          Browse our collection of products and learn more about React development.
        </p> */}
                    <button className="btn btn-lg" 
                    style={{ backgroundColor: '#C82716', color: 'white'}}>
                        View Products
                    </button>
                </div>
            </div>
        </>
    )
}