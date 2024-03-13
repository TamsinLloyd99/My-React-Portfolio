import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactForm.css';

    const ContactButton = () => {
        const [showContactForm, setShowContactForm] = useState(false);
      
        const toggleContactForm = () => {
          setShowContactForm(!showContactForm);
        };
      
        return (
          <>
            <button className= 'btn' onClick={toggleContactForm}>Contact Me</button>
            {showContactForm && <ContactForm onClose={toggleContactForm} />}
          </>
        );
      };
 

const ContactForm = ({ onClose }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  
    return (
        <div id="contactFormOverlay">
        <div id="contactForm" className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
                </Form.Group>

                <Button className="btn" variant="primary" type="submit">Submit</Button>
            </Form>
            <Button className='btn' id="closeButton" onClick={onClose}>Close</Button>
        </div>
    </div>
);
};


export default ContactButton