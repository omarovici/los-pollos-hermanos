import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import './Item.css'

export default function Item() {
    const location = useLocation();
    const item = location.state?.item;


    const rating = parseFloat(item.rating);
    const fullStars = Math.floor(rating);

    return (
        <div style={{
            backgroundColor: '#FCCC00',
            justifyContent: 'center',
            paddingTop: '70px',
            paddingBottom: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '80vh'
        }} className="item-container">
            <div className="container-fluid px-2 px-md-3 px-lg-4">
                <div className="row justify-content-center ">
                    <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                        <div className="card" style={{
                            backgroundColor: '#FFFFF0',
                            border: 'none',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                            margin: '0 auto'
                        }}>
                            <div className="row g-0">
                                <div className="col-12 col-md-6">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="img-fluid w-100 item-image"
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="card-body h-100 d-flex flex-column item-padding">
                                        {/* Back button */}
                                        <div className="mb-3">
                                            <Link
                                                to="/menu"
                                                className="btn btn-sm"
                                                style={{
                                                    backgroundColor: '#C82716',
                                                    color: '#FFFFF0',
                                                    border: 'none',
                                                    borderRadius: '20px',
                                                    fontSize: '0.8rem',
                                                    padding: '0.4rem 0.8rem'
                                                    // hover effects

                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#FCCC00';
                                                    e.target.style.color = 'black';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = '#C82716';
                                                    e.target.style.color = '#FFFFF0';
                                                }}
                                            >
                                                ← Back to Menu
                                            </Link>
                                        </div>

                                        <h1 className="card-title mb-3 item-title" style={{
                                            color: '#C82716',
                                            fontWeight: 'bold',
                                            lineHeight: '1.3'
                                        }}>
                                            {item.title}
                                        </h1>

                                        <div className="mb-3">
                                            <h6 className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>Publisher</h6>
                                            <p className="mb-0" style={{
                                                fontSize: '1rem',
                                                color: '#333',
                                                lineHeight: '1.4'
                                            }}>
                                                {item.publisher}
                                            </p>
                                        </div>

                                        <div className="mb-3">
                                            <h6 className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>Rating</h6>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="d-flex align-items-center">
                                                    {[...Array(5)].map((_, index) => (
                                                        <svg
                                                            key={index}
                                                            className="item-stars"
                                                            style={{
                                                                color: index < fullStars ? '#FCCC00' : '#d1d5db'
                                                            }}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span
                                                    className="badge ms-2"
                                                    style={{
                                                        backgroundColor: '#C82716',
                                                        color: '#FFFFF0',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        padding: '0.3rem 0.6rem'
                                                    }}
                                                >
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h6 className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>Price</h6>
                                            <h2 className="item-price" style={{
                                                color: '#C82716',
                                                fontWeight: 'bold'
                                            }}>
                                                ${item.price}
                                            </h2>
                                        </div>

                                        <div className="mt-auto">
                                            <button
                                                className="btn btn-lg w-100"
                                                style={{
                                                    backgroundColor: '#C82716',
                                                    color: '#FFFFF0',
                                                    border: 'none',
                                                    borderRadius: '10px',
                                                    padding: '0.75rem',
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#FCCC00';
                                                    e.target.style.color = 'black';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = '#C82716';
                                                    e.target.style.color = '#FFFFF0';
                                                }}
                                                onClick={() => {
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
