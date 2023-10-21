import React from "react";
import './Contact.scss';

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-info">
                <h2>Lets Talk</h2>
                <p>Short paragraph about how to contact us.</p>
                <p>Email: contact@example.com</p>
                <p>Tel: +123 456 7890</p>
                <p>Location: 123 Street Name, City, Country</p>
            </div>
            <div className="contact-form">
                <form>
                    <h2> Contact us</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={4}></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
