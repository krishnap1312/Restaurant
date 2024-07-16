import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token'); // Retrieve token from local storage
            if (!token) return; // Exit if no token

            try {
                // Fetch user profile
                const response = await axios.get('http://localhost:5000/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
                setFormData(response.data);

                // Fetch order history (if applicable)
                const ordersResponse = await axios.get('http://localhost:5000/api/orders', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setOrders(ordersResponse.data);
            } catch (error) {
                console.error('Error fetching profile:', error.response ? error.response.data : error.message);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.put('http://localhost:5000/api/auth/profile', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(formData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="profile-container">
        <header className="dashboard-header">
                <div className="logo">Restaurant Dashboard</div>
                <nav className="dashboard-nav">
                    <a href="/menu">Browse Menu</a>
                    <a href="/profile">Profile</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/">Logout</a>
                </nav>
            </header>
            <h1>My Profile</h1>
            {isEditing ? (
                <div className="profile-info">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div className="profile-info">
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.mobile}</p>
                    <p>Address: {user.address}</p>
                    <p>Location: {user.location}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            )}

            <div className="order-history">
                <h2>Order History</h2>
                <ul>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <li key={order._id}>
                                <h3>Order #{order._id}</h3>
                                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                                <p>Total: ${order.total.toFixed(2)}</p>
                            </li>
                        ))
                    ) : (
                        <p>No orders found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
