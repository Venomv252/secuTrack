import React from "react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Here you would typically send the data to your backend
        alert("Thank you for your message! We'll get back to you soon.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div id="contact-page">
            <div className="container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our cybersecurity experts</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <div className="contact-item">
                            <h4>Email</h4>
                            <p>shiran1431911@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <h4>Response Time</h4>
                            <p>We typically respond within 24 hours</p>
                        </div>
                        <div className="contact-item">
                            <h4>Support Hours</h4>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us how we can help you..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
