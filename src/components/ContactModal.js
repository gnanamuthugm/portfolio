import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './ContactModal.css';

/*
 * EMAILJS SETUP INSTRUCTIONS:
 * 1. Sign up for free at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}}: Sender's name
 *    - {{from_email}}: Sender's email
 *    - {{phone}}: Phone number
 *    - {{job_description}}: Job description
 *    - {{message}}: Message content
 * 4. Replace the placeholder credentials below with your actual values:
 *    - serviceId: Your service ID (e.g., "service_abc123")
 *    - templateId: Your template ID (e.g., "template_xyz789")
 *    - publicKey: Your public key from EmailJS dashboard
 */

const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobDescription: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone || formData.phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.jobDescription.trim()) {
      newErrors.jobDescription = 'Job description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      // Check if EmailJS credentials are configured
      const serviceId = 'service_ml9ykmd';
      const templateId = 'template_adadezg';
      const publicKey = 'Icb8eMEicXJurq6we';
      
      // If using placeholder credentials, log the data instead
      if (serviceId.includes('your_') || templateId.includes('your_') || publicKey.includes('your_')) {
        console.log('Contact Form Submission (EmailJS not configured):', formData);
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobDescription: '',
          message: ''
        });
        
        // Close modal after success message
        setTimeout(() => {
          handleClose();
          setShowSuccess(false);
        }, 3000);
        return;
      }

      // Send actual email if credentials are configured
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        job_description: formData.jobDescription,
        message: formData.message || 'No additional message provided'
      }, publicKey);

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobDescription: '',
        message: ''
      });
      
      // Close modal after success message
      setTimeout(() => {
        handleClose();
        setShowSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    handleClose();
    setErrors({});
    setShowSuccess(false);
    setShowError(false);
  };

  return (
    <Modal show={show} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="purple">Get in Touch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showSuccess && (
          <Alert variant="success">
            Thank you for your message! I'll get back to you soon.
          </Alert>
        )}
        
        {showError && (
          <Alert variant="danger">
            Failed to send message. Please try again or contact me directly.
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Name *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              placeholder="Your full name"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="email address"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Phone Number *</Form.Label>
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
              inputClass={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              containerClass="react-tel-input"
              placeholder="Enter phone number"
              enableSearch={true}
              searchPlaceholder="Search country"
              preferredCountries={['us', 'gb', 'in', 'ca', 'au']}
              autoFormat={true}
            />
            {errors.phone && (
              <div className="invalid-feedback d-block">
                {errors.phone}
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Job Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              isInvalid={!!errors.jobDescription}
            />
            <Form.Control.Feedback type="invalid">
              {errors.jobDescription}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Message (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional details about the role or any questions..."
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
              style={{ backgroundColor: '#c770f0', borderColor: '#c770f0' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
