import React from 'react'

export default function NotFound() {
    return (
        <>
            <div className="jumbotron p-4 p-md-5 " style={{ backgroundColor: '#FCCC00', minHeight: '80vh' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="display-4 mb-3" style={{ color: '#C82716' }}>There is no page here!</h1>
                    <blockquote>
                        <p style={{ color: '#C82716' }}>Gus Fring suggests you check the menu.</p>
                    </blockquote>
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW0yd2V5djdxc21hMmp6bWQ3bnM4b3R1ZjM4czVhY2Q5dzEwdGZrOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gmBjeu09SebhSwEFZD/giphy.gif" alt="Gus Fring" style={{ width: '500px', marginTop: '20px' , marginBottom: '50px'}} />
                </div>
            </div>
        </>
    )
}
