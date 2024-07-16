// src/components/SpecialsForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './SpecialsForm.css';

const SpecialsForm = ({ onSpecialAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSpecial = {
            name,
            description,
            imageUrl
        };

        try {
            const response = await axios.post('http://localhost:5000/api/specials', newSpecial);
            onSpecialAdded(response.data);
            setName('');
            setDescription('');
            setImageUrl('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <input
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
            />
            <button type="submit">Add Special</button>
        </form>
    );
};

export default SpecialsForm;
