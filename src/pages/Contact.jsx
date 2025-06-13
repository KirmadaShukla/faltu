import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'contact@example.com',
      link: 'mailto:contact@example.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '123 Business Street, Suite 100, City, State 12345',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12" data-component="contact-page">
      <div className="text-center mb-16" data-component="contact-hero">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-component="contact-title">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-component="contact-description">
          Have questions? We'd love to hear from you. Send us a message and we'll
          respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-component="contact-content">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8" data-component="contact-form-container">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-component="contact-form-title">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6" data-component="contact-form">
            <div data-component="contact-form-field">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
                data-component="contact-form-label"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-component="contact-form-input"
              />
            </div>
            <div data-component="contact-form-field">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
                data-component="contact-form-label"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-component="contact-form-input"
              />
            </div>
            <div data-component="contact-form-field">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
                data-component="contact-form-label"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-component="contact-form-input"
              />
            </div>
            <div data-component="contact-form-field">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
                data-component="contact-form-label"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-component="contact-form-textarea"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              data-component="contact-form-submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8" data-component="contact-info">
          <div className="bg-white rounded-xl shadow-lg p-8" data-component="contact-info-container">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-component="contact-info-title">
              Contact Information
            </h2>
            <div className="space-y-6" data-component="contact-info-list">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  data-component="contact-info-item"
                >
                  <info.icon className="text-blue-500 text-xl mt-1" data-component="contact-info-icon" />
                  <div data-component="contact-info-content">
                    <h3 className="font-medium text-gray-900" data-component="contact-info-title">
                      {info.title}
                    </h3>
                    <p className="text-gray-600" data-component="contact-info-text">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8" data-component="contact-map-container">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-component="contact-map-title">
              Location
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg" data-component="contact-map">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center" data-component="contact-map-placeholder">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 