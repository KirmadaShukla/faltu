import React from 'react';
import { FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities.',
      icon: FaLightbulb,
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared success.',
      icon: FaUsers,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do.',
      icon: FaChartLine,
    },
  ];

  return (
    <div className="min-h-screen" data-source="src/pages/About.jsx">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl">
            We're on a mission to transform the digital landscape
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower businesses and individuals with innovative solutions that
              drive growth and success in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <value.icon className="text-4xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2020, we've grown from a small team of passionate
              individuals to a full-service digital solutions provider. Our journey
              has been marked by continuous learning, innovation, and a commitment
              to delivering exceptional value to our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 