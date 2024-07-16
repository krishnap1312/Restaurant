// src/components/Specials.js

import React, { useEffect, useState } from 'react';
import './Specials.css';

const Specials = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dummy data for testing
    const dummyData = [
        {
            _id: '1',
            name: 'Special Dish 1',
            description: 'A delightful blend of flavors and textures.',
            image: '/images/special1.jpg'
        },
        {
            _id: '2',
            name: 'Special Dish 2',
            description: 'Experience the taste of our chef\'s special creation.',
            image: '/images/special2.jpg'
        },
        {
            _id: '3',
            name: 'Special Dish 3',
            description: 'A perfect dish for any occasion.',
            image: '/images/special3.jpg'
        },
        
        {
            _id: '3',
            name: 'Special Dish 3',
            description: 'A perfect dish for any occasion.',
            image: '/images/special3.jpg'
        },
        
        {
            _id: '3',
            name: 'Special Dish 3',
            description: 'A perfect dish for any occasion.',
            image: '/images/special3.jpg'
        },
        {
            _id: '2',
            name: 'Special Dish 2',
            description: 'Experience the taste of our chef\'s special creation.',
            image: '/images/special2.jpg'
        },
        {
            _id: '3',
            name: 'Special Dish 3',
            description: 'A perfect dish for any occasion.',
            image: '/images/special3.jpg'
        },
        {
            _id: '2',
            name: 'Special Dish 2',
            description: 'Experience the taste of our chef\'s special creation.',
            image: '/images/special2.jpg'
        },
        {
            _id: '3',
            name: 'Special Dish 3',
            description: 'A perfect dish for any occasion.',
            image: '/images/special3.jpg'
        }
    ];

    // Uncomment this section when ready to fetch from backend
    /*
    useEffect(() => {
        const fetchSpecials = async () => {
            try {
                const response = await fetch('/api/specials'); // Update with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch specials');
                }
                const data = await response.json();
                setSpecials(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSpecials();
    }, []);
    */

    // if (loading) return <p>Loading specials...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <section className="specials-section">
            <h2>Specials</h2>
            <div className="specials-container">
                {/* Mapping over dummyData instead of fetched specials */}
                {dummyData.map((special) => (
                    <div className="special-item" key={special._id}>
                        <img src={special.image} alt={special.name} />
                        <h3>{special.name}</h3>
                        <p>{special.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Specials;
