import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader';
import styles from './Menu.module.css';
function generatePrice() {
    return (Math.random() * (25 - 8) + 8).toFixed(2);
}

function generateRating() {
    return (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
}

export default function Menu() {
    const [recipesArray, setRecipesArray] = useState([]);

    async function gerRecipe() {
        try {
            let { data } = await axios.get('https://forkify-api.herokuapp.com/api/search?q=chicken');
            const recipesWithPricing = data.recipes.map(recipe => ({
                ...recipe,
                price: generatePrice(),
                rating: generateRating()
            }));
            setRecipesArray(recipesWithPricing);
        } catch (error) {
            console.error("Error fetching chicken recipes:", error);
        }
    }

    useEffect(() => {
        gerRecipe();
    }, []);
    return (
        <>
            {console.log('Data loaded:', recipesArray)}
            <div className="jumbotron p-4 p-md-5 " style={{ backgroundColor: '#FCCC00' }} >
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="display-4 mb-3" style={{ color: '#C82716' }}>Los Pollos Hermanos Menu</h1>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    {recipesArray.length > 0 ? recipesArray.map((recipe) => (
                        <Item key={recipe.recipe_id} recipe={recipe} />
                    )) : <Loader />}
                </div>
            </div>
        </>
    )
}

function Item({ recipe }) {
    const rating = parseFloat(recipe.rating);
    const fullStars = Math.floor(rating);

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Link 
                to={`/item/${recipe.recipe_id}`}
                state={{ item: recipe }}
                style={{ textDecoration: 'none' }}
            >
                <div className="card h-100" style={{
                    maxWidth: '350px',
                    margin: '0 auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFF0',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                    <img
                        src={recipe.image_url}
                        alt={recipe.title}
                        className="card-img-top"
                        style={{
                            height: '200px',
                            objectFit: 'cover'
                        }}
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title" style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: 'black',
                            lineHeight: '1.4',
                            marginBottom: '0.5rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {recipe.title}
                        </h5>

                        <div className="mb-3 d-flex align-items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    style={{
                                        width: '20px',
                                        height: '20px',
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
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    padding: '0.25rem 0.5rem'
                                }}
                            >
                                {recipe.rating}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-auto">
                            <span style={{
                                fontSize: '1.875rem',
                                color: 'black'
                            }}>
                                ${recipe.price}
                            </span>
                            <button
                                className={`btn ${styles.addToCartBtn}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    alert(`Added ${recipe.title} to cart for $${recipe.price}!`);
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
