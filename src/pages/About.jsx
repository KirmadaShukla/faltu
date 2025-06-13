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
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a team of innovators, creators, and problem-solvers dedicated to
          building the future of digital experiences.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
          >
            <feature.icon className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Team Member {member}
                </h3>
                <p className="text-gray-600 mb-4">Position</p>
                <p className="text-gray-500">
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