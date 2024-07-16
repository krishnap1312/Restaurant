import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/menu');
            setMenuItems(response.data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    // Dummy data for testing
    const dummyMenuItems = [
        {
            _id: '1',
            name: 'Menu Item 1',
            description: 'Delicious description for item 1.',
            price: 10.99
        },
        {
            _id: '2',
            name: 'Menu Item 2',
            description: 'Tasty description for item 2.',
            price: 12.49
        },
        {
            _id: '3',
            name: 'Menu Item 3',
            description: 'Yummy description for item 3.',
            price: 9.99
        },
        {
            _id: '4',
            name: 'Menu Item 4',
            description: 'Scrumptious description for item 4.',
            price: 11.49
        }
    ];

    return (
        <div className="menu-list">
            <div className="header-buttons">
                <Link to="/">
                    <img src="/images/Logo.jpg" alt="Logo" />
                </Link>
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="register-button">Register</button>
                </Link>
            </div>
            <h2>Menu Items</h2>
            <ul>
                {dummyMenuItems.map(item => (
                    <li key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
