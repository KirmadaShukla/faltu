import React from 'react';
import { FaUsers, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaUsers,
      title: 'Our Team',
      description: 'A diverse group of passionate professionals dedicated to excellence.',
    },
    {
      icon: FaRocket,
      title: 'Our Mission',
      description: 'To provide innovative solutions that empower businesses and individuals.',
    },
    {
      icon: FaLightbulb,
      title: 'Our Vision',
      description: 'To be the leading platform for digital transformation and growth.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12" data-component="about-page">
      {/* Hero Section */}
      <div className="text-center mb-16" data-component="about-hero">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-component="about-title">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-component="about-description">
          We are a team of innovators, creators, and problem-solvers dedicated to
          building the future of digital experiences.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-component="about-features">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            data-component="about-feature-card"
          >
            <feature.icon className="text-blue-500 text-4xl mb-4" data-component="about-feature-icon" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3" data-component="about-feature-title">
              {feature.title}
            </h3>
            <p className="text-gray-600" data-component="about-feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 rounded-2xl p-8" data-component="about-team">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-component="about-team-title">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-component="about-team-grid">
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              data-component="about-team-member"
            >
              <div className="h-48 bg-gray-200" data-component="about-team-member-image"></div>
              <div className="p-6" data-component="about-team-member-info">
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-component="about-team-member-name">
                  Team Member {member}
                </h3>
                <p className="text-gray-600 mb-4" data-component="about-team-member-position">Position</p>
                <p className="text-gray-500" data-component="about-team-member-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 