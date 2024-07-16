import React, { useEffect, useState } from 'react';
import './OfferCarousel.css';

const OffersGrid = () => {
    const [offers, setOffers] = useState([]);

    // Dummy data for testing
    const dummyData = [
        {
            _id: '1',
            title: 'Special Offer 1',
            description: 'Enjoy a 20% discount on your first order!',
            imageUrl: '/images/offer1.jpg'
        },
        {
            _id: '2',
            title: 'Special Offer 2',
            description: 'Buy one get one free on selected dishes.',
            imageUrl: '/images/offer2.jpg'
        },
        {
            _id: '3',
            title: 'Special Offer 3',
            description: 'Free dessert with every main course ordered.',
            imageUrl: '/images/offer3.jpg'
        },
        {
            _id: '4',
            title: 'Special Offer 4',
            description: 'Free appetizer with any purchase over $20.',
            imageUrl: '/images/offer4.jpg'
        },
        {
            _id: '5',
            title: 'Special Offer 5',
            description: 'Get 10% off on your next visit.',
            imageUrl: '/images/offer5.jpg'
        }
    ];

    useEffect(() => {
        // Uncomment the following code when ready to fetch from backend
        /*
        const fetchOffers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/offers');
                setOffers(response.data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };

        fetchOffers();
        */

        // For testing, use dummy data instead
        setOffers(dummyData);
    }, []);

    return (
        <div className="offers-grid">
            {offers.map((offer) => (
                <div key={offer._id} className="offer-item">
                    <img src={offer.imageUrl} alt={offer.title} />
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                </div>
            ))}
        </div>
    );
};

export default OffersGrid;
