import React from 'react';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto text-center font-serif">
      <h2 className="text-3xl mb-8">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        For inquiries about exhibitions, acquisitions, or collaborations, please reach out via email.
      </p>
      <a
        href="mailto:contact@michaelcameron.com"
        className="text-xl text-gray-800 hover:text-gray-600 transition-colors duration-200"
      >
        contact@michaelcameron.com
      </a>
    </div>
  );
}

export default Contact;