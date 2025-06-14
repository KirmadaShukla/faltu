import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import DataCard from '../data/DataCard';

const Home = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      icon: '🚀',
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2',
      icon: '💡',
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3',
      icon: '⚡',
    },
  ];

  return (
    <div className="min-h-screen" data-source="src/pages/Home.jsx">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing features and possibilities
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Card Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Data Insights</h2>
          <DataCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us today and experience the difference
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
.text-gray-400 {
  font-size: 12px;
  color: rgb(171, 95, 95);
  background-color: rgb(238, 129, 129);
  margin: 10px;
}