import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OffersManagement.css';

const OffersManagement = () => {
    const [offers, setOffers] = useState([]);
    const [newOffer, setNewOffer] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {
        // Fetch offers from the backend
        const fetchOffers = async () => {
            const response = await axios.get('http://localhost:5000/api/offers');
            setOffers(response.data);
        };
        fetchOffers();
    }, []);

    const handleAddOffer = async () => {
        const response = await axios.post('http://localhost:5000/api/offers', newOffer);
        setOffers([...offers, response.data]);
        setNewOffer({ title: '', description: '', imageUrl: '' });
    };

    const handleDeleteOffer = async (id) => {
        await axios.delete(`http://localhost:5000/api/offers/${id}`);
        setOffers(offers.filter(offer => offer._id !== id));
    };

    return (
        <div className="offers-management-container">
            <h1>Manage Offers</h1>
            <form
                className="offers-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddOffer();
                }}
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={newOffer.title}
                    onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newOffer.description}
                    onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newOffer.imageUrl}
                    onChange={(e) => setNewOffer({ ...newOffer, imageUrl: e.target.value })}
                    required
                />
                <button type="submit">Add Offer</button>
            </form>
            <ul className="offers-list">
                {offers.map(offer => (
                    <li key={offer._id} className="offer-item">
                        <img src={offer.imageUrl} alt={offer.title} />
                        <div className="offer-details">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                            <button onClick={() => handleDeleteOffer(offer._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OffersManagement;
