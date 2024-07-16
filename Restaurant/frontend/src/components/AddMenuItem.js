import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddMenuItem.css';

const AddMenuItem = () => {
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

    const handleKeyDown = (e) => {
        // Handling keyboard shortcuts for text formatting
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            document.execCommand('bold');
        }
        if (e.ctrlKey && e.key === 'i') {
            e.preventDefault();
            document.execCommand('italic');
        }
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            document.execCommand('underline');
        }
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            document.execCommand('strikeThrough');
        }
        // More commands can be added here...
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/menuAdmin', {
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
            alert(response.data.message);
            // Reset form fields
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl('');
            setCategory('');
            setIngredients('');
            setIsAvailable(true);
            setRating(0);
            setReviews('');
            setDietaryOptions('');
        } catch (error) {
            console.error('Error adding menu item:', error);
        }
    };

    return (
        <div className="add-menu-item">
            <h2>Add Menu Item</h2>
            <form onSubmit={handleSubmit}>
                {/* Input fields for the menu item details */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        min="0"
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ingredients (comma-separated):</label>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Available:</label>
                    <select
                        value={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.value === 'true')}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                        min="0"
                        max="5"
                    />
                </div>
                <div>
                    <label>Reviews (comma-separated):</label>
                    <input
                        type="text"
                        value={reviews}
                        onChange={(e) => setReviews(e.target.value)}
                    />
                </div>
                <div>
                    <label>Dietary Options (comma-separated):</label>
                    <input
                        type="text"
                        value={dietaryOptions}
                        onChange={(e) => setDietaryOptions(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <div
                        contentEditable
                        suppressContentEditableWarning
                        onInput={(e) => setDescription(e.currentTarget.innerHTML)}
                        onKeyDown={handleKeyDown}
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
                <button type="submit">Add Menu Item</button>
            </form>
            <button onClick={() => navigate('/menu')} style={{ marginTop: '15px' }}>
                Go to Menu List
            </button>
        </div>
    );
};

export default AddMenuItem;
