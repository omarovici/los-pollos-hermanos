import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

export default function Item() {
    const location = useLocation();
    const item = location.state?.item;

    const rating = parseFloat(item.rating);
    const fullStars = Math.floor(rating);

    return (
        <div style={{ backgroundColor: '#FCCC00', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card" style={{
                            backgroundColor: '#FFFFF0',
                            border: 'none',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="img-fluid h-100"
                                        style={{
                                            objectFit: 'cover',
                                            minHeight: '500px'
                                        }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body p-4 h-100 d-flex flex-column">
                                        <div className="mb-3">
                                            <Link
                                                to="/menu"
                                                className="btn btn-sm"
                                                style={{
                                                    backgroundColor: '#C82716',
                                                    color: '#FFFFF0',
                                                    border: 'none',
                                                    borderRadius: '20px'
                                                }}
                                            >
                                                ← Back to Menu
                                            </Link>
                                        </div>

                                        <h1 className="card-title mb-3" style={{
                                            color: '#C82716',
                                            fontSize: '1.8rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {item.title}
                                        </h1>

                                        <div className="mb-3">
                                            <h6 className="text-muted mb-2">Publisher</h6>
                                            <p className="mb-0" style={{ fontSize: '1.1rem', color: '#333' }}>
                                                {item.publisher}
                                            </p>
                                        </div>

                                        <div className="mb-3">
                                            <h6 className="text-muted mb-2">Rating</h6>
                                            <div className="d-flex align-items-center">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            color: index < fullStars ? '#FCCC00' : '#d1d5db'
                                                        }}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                                <span
                                                    className="badge ms-2"
                                                    style={{
                                                        backgroundColor: '#C82716',
                                                        color: '#FFFFF0',
                                                        fontSize: '0.9rem',
                                                        fontWeight: '600',
                                                        padding: '0.4rem 0.8rem'
                                                    }}
                                                >
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h6 className="text-muted mb-2">Price</h6>
                                            <h2 style={{
                                                color: '#C82716',
                                                fontSize: '2.5rem',
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
                                                    fontSize: '1.1rem',
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
                                                    alert(`Added ${item.title} to cart for $${item.price}!`);
                                                }}
                                            >
                                                Add to Cart - ${item.price}
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
