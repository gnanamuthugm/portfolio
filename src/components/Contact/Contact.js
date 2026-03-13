import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useToast } from '../../context/ToastContext';
import Particle from '../Particle';
import pdf from '../../Assets/Gnanamuthu_CV.pdf';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

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

const Contact = () => {
  const { showSuccess, showError } = useToast();
  const recaptchaRef = useRef();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    jobDescriptionText: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.phone || formData.phone.length < 8) {
      newErrors.phone = "Please enter a valid phone number with country code";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    
    // Clear error for this field if it exists
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

    // Check if reCAPTCHA is completed
    if (!captchaValue) {
      showError('Please verify captcha');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_ml9ykmd';
      const templateId = 'template_adadezg';
      const publicKey = 'Icb8eMEicXJurq6we';

      // Prepare email data
      const emailData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        job_description: 'Not provided'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, emailData, publicKey);

      showSuccess('Thank you for sharing opportunity.');
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        jobDescriptionText: ''
      });
      
      // Reset reCAPTCHA after successful submission
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      showError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="contact-header">
              <h1 className="project-heading">
                GET IN <span className="purple">TOUCH</span>
              </h1>
              <p className="contact-subtitle">
                Feel free to reach out for job opportunities, collaborations, or any AI and Conversational AI related discussions. I’d be happy to connect and explore how we can work together.
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col md={8} className="contact-form-container">
              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="form-label-custom">First Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                      placeholder="First Name"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label className="form-label-custom">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="form-control-custom"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="form-label-custom">Company Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      isInvalid={!!errors.companyName}
                      placeholder="Company Name"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.companyName}
                    </Form.Control.Feedback>
                  </Col>

                  

                  <Col md={6} className="mb-3">
                    <Form.Label className="form-label-custom">HR Phone Number *</Form.Label>
                    <PhoneInput
                      country={"in"}
                      enableSearch={true}
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      containerClass="phone-container"
                      inputClass="phone-input"
                    />
                    {errors.phone && (
                      <div className="invalid-feedback d-block" style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        {errors.phone}
                      </div>
                    )}
                  </Col>
                </Row>

                <Row>
                  <Col className="mb-4">
                    <Form.Label className="form-label-custom">Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="Work Email Address"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Tell me about the role, salary range, and location..."
                    className="form-control-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Job Description (Optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="jobDescriptionText"
                    value={formData.jobDescriptionText}
                    onChange={handleChange}
                    placeholder="Paste the job description here..."
                    className="form-control-custom"
                  />
                </Form.Group>

                {/* Google reCAPTCHA */}
                <div className="mb-4 text-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LdC2YgsAAAAAEpE0Ssdh6EanwpIU4Bu6MYV9UMk"
                    onChange={(value) => setCaptchaValue(value)}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>

                <div className="d-grid">
                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaEnvelope className="me-2" />
                        Send
                      </>
                    )}
                  </Button>
                </div>
              </Form>
              
              {/* Message and CV Download Section */}
              <div className="contact-cv-section mt-5">
                <Row className="justify-content-center">
                  <Col md={10} className="text-center">
                    <p className="contact-message-text">
                      "Thank you for visiting! I believe a great resume tells a story—feel free to explore mine below."
                    </p>
                  </Col>
                </Row>
                
                <Row className="justify-content-center mt-4">
                  <Col md={6} className="text-center">
                    <a
                      href={pdf}
                      download="Gnanamuthu_CV.pdf"
                      className="download-cv-btn"
                    >
                      <Button variant="primary" className="cv-download-btn">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                      </Button>
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
