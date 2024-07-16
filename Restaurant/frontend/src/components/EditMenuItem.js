import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMenuItem.css';

const EditMenuItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState('');
    const [dietaryOptions, setDietaryOptions] = useState('');

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/menu/${id}`);
                const item = response.data;
                setName(item.name);
                setDescription(item.description);
                setPrice(item.price);
                setImageUrl(item.imageUrl);
                setCategory(item.category);
                setIngredients(item.ingredients.join(', '));
                setIsAvailable(item.isAvailable);
                setRating(item.rating);
                setReviews(item.reviews.join(', '));
                setDietaryOptions(item.dietaryOptions.join(', '));
            } catch (error) {
                console.error('Error fetching menu item:', error);
            }
        };
        fetchMenuItem();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/menu/${id}`, {
                name,
                description,
                price: parseFloat(price),
                imageUrl,
                category,
                ingredients: ingredients.split(',').map(ing => ing.trim()),
                isAvailable,
                rating: parseFloat(rating),
                reviews: reviews.split(',').map(review => review.trim()),
                dietaryOptions: dietaryOptions.split(',').map(option => option.trim()),
            });
            navigate('/menu'); // Redirect to menu list after update
        } catch (error) {
            console.error('Error updating menu item:', error);
        }
    };

    return (
        <div className="edit-menu-item">
            <h2>Edit Menu Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min="0" />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Ingredients (comma-separated):</label>
                    <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                </div>
                <div>
                    <label>Available:</label>
                    <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value === 'true')}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required min="0" max="5" />
                </div>
                <div>
                    <label>Reviews (comma-separated):</label>
                    <input type="text" value={reviews} onChange={(e) => setReviews(e.target.value)} />
                </div>
                <div>
                    <label>Dietary Options (comma-separated):</label>
                    <input type="text" value={dietaryOptions} onChange={(e) => setDietaryOptions(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <div
                        contentEditable
                        suppressContentEditableWarning
                        onInput={(e) => setDescription(e.currentTarget.innerHTML)}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '10px',
                            minHeight: '100px',
                            marginBottom: '15px',
                        }}
                        placeholder="Enter description..."
                    />
                </div>
                <button type="submit">Update Menu Item</button>
            </form>
        </div>
    );
};

export default EditMenuItem;
