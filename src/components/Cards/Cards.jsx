import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({ cities }) => {
    return (
        <>
        {cities.map(city => (
            <div className="cards" key={city.id}>
                    <Link to={`/city/${city.id}`}>
                        <img src={city.image} alt={city.city} />
                    </Link>
                    <h4>{city.city}</h4>
                    <p>{city.description}</p>
                </div>
            ))}
        </>
    );
};

export default Cards;
