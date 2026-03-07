import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const FloatingContactIcon = ({ showContactModal, setShowContactModal }) => {
  return (
    <div
      className="floating-contact-icon"
      onClick={() => setShowContactModal(true)}
      title="Contact Me"
    >
      <FaEnvelope />
    </div>
  );
};

export default FloatingContactIcon;
