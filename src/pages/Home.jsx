import React from 'react';
import DataCard from '../data/DataCard';
import { FaChartLine, FaUsers, FaCog } from 'react-icons/fa';

const Home = () => {
  const cards = [
    {
      title: 'Analytics',
      description: 'View detailed analytics and insights about your data.',
      icon: FaChartLine,
    },
    {
      title: 'Team',
      description: 'Manage your team members and their permissions.',
      icon: FaUsers,
    },
    {
      title: 'Settings',
      description: 'Configure your application settings and preferences.',
      icon: FaCog,
    },
  ];

  return (
    <div className="space-y-8" data-component="home-page">
      <section className="text-center" data-component="home-hero">
        <h1 className="text-4xl font-bold text-gray-900 mb-4" data-component="home-title">
          Welcome to Your Dashboard
        </h1>
        <p className="text-xl text-gray-600" data-component="home-subtitle">
          Manage your data and settings in one place
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-component="home-cards">
        {cards.map((card, index) => (
          <DataCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            onClick={() => console.log(`Clicked ${card.title}`)}
          />
        ))}
      </section>
    </div>
  );
};

export default Home; 