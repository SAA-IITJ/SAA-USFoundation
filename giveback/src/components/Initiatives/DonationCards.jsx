import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Card = ({ title, content, imageSrc, buttons }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
    <h2 className="text-2xl font-bold text-[#000080] p-4">{title}</h2>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        <div
          className="text-gray-700 text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      {imageSrc && (
        <div className="md:w-1/3 p-4">
          <img src={imageSrc} alt={title} className="w-full h-auto object-cover rounded" />
        </div>
      )}
    </div>
    <div className="flex flex-wrap justify-around p-4">
      {buttons.map((button, index) => (
        <Link key={index} to={button.link}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded m-1 hover:bg-blue-900 transition duration-300">
            {button.label}
          </button>
        </Link>
      ))}
    </div>
  </div>
);

const DonationCards = ({ cardsData }) => {
  return (
    <div className="container mx-auto p-4">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default DonationCards;
