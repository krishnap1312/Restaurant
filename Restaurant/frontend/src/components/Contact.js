import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div className="contact-details">
                    <h2>Get in Touch</h2>
                    <p>We would love to hear from you! Please reach out with any questions or feedback.</p>
                    <p><strong>Email:</strong> contact@restaurant.com</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <p><strong>Address:</strong> 123 Food Street, Culinary City, 56789</p>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Message:
                            <textarea name="message" rows="4" required></textarea>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
