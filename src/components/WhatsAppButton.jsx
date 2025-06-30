import React from 'react';
import '../styles/WhatsAppButton.css'; // external css for better control

const WhatsAppButton = () => {
  const phoneNumber = '918122560012'; // 🔥 Put your real number here (example: 917395960012)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
