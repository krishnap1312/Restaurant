// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Specials from './Specials';

const Home = () => {
    return (
        <div className="home-container">
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
            <header className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Our Restaurant</h1>
                    <p>Experience the finest cuisine crafted with the freshest ingredients.</p>
                    <Link to="/menu">
                        <button className="browse-menu-button">Browse Menu</button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src="/images/hero-image.jpg" alt="Delicious Food" />
                </div>
            </header>

            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Welcome to our restaurant, where culinary excellence meets a warm and inviting atmosphere. Our establishment is more than just a place to eat; it's a destination where friends and families gather to create lasting memories. We take immense pride in offering a diverse menu that caters to all palates, from the adventurous foodie to those who seek the comfort of familiar flavors.
                </p>
                <p>
                    Our chefs are the heart of our restaurant, bringing years of experience and a passion for food to every dish they create. They meticulously select the freshest ingredients, ensuring that each meal is not only delicious but also of the highest quality. Our commitment to using locally sourced produce supports our community and guarantees that our guests enjoy the best flavors each season has to offer.
                </p>
                <p>
                    At our restaurant, we believe in the importance of ambiance. Our dining area is designed to be both elegant and comfortable, making it the perfect setting for any occasion, whether it's a romantic dinner, a casual lunch, or a festive celebration. Our attentive and friendly staff are dedicated to providing impeccable service, ensuring that your dining experience is enjoyable from start to finish.
                </p>
                <p>
                    We are also proud of our sustainability efforts. From reducing food waste to using eco-friendly packaging, we are committed to making a positive impact on the environment. We believe that great food and great practices go hand in hand.
                </p>
                <p>
                    Thank you for choosing our restaurant. We look forward to welcoming you and providing an unforgettable dining experience. Whether you're here to enjoy a special meal, celebrate a milestone, or simply relax with good food and company, we are here to make your visit exceptional.
                </p>
                <img src="/images/about-image.jpg" alt="About Our Restaurant" />
            </section>

            <Specials />

            <section className="testimonials-section">
                <h2>What Our Customers Say</h2>
                <div className="testimonial">
                    <p>"The best dining experience I've ever had!" - John Doe</p>
                </div>
                <div className="testimonial">
                    <p>"Amazing food and excellent service!" - Jane Smith</p>
                </div>
                <div className="testimonial">
                    <p>"I will definitely come back for more." - Mark Johnson</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
