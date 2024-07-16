import React, { useState } from 'react';
import axios from 'axios';
import "./FeedbackForm.css"

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        itemName: '',
        rating: '',
        description: ''
    });

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/feedback', feedback);
            alert('Feedback submitted successfully!');
            // Reset form or redirect if needed
            setFeedback({ itemName: '', rating: '', description: '' });
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div>
        <header className="dashboard-header">
                <div className="logo">Restaurant Dashboard</div>
                <nav className="dashboard-nav">
                    <a href="/menu">Browse Menu</a>
                    <a href="/profile">Profile</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/">Logout</a>
                </nav>
            </header>
            <h2>Customer Feedback</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={feedback.itemName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={feedback.rating}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Short Description"
                    value={feedback.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
