import React from 'react';

const Card = ({ title, content, imageSrc, buttons }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
    <h2 className="text-2xl font-bold text-red-600 p-4">{title}</h2>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        <p className="text-gray-700 text-justify">{content}</p>
        {content.length > 200 && (
          <a href="#" className="text-red-600 hover:underline">read more..</a>
        )}
      </div>
      {imageSrc && (
        <div className="md:w-1/3 p-4">
          <img src={imageSrc} alt={title} className="w-full h-auto object-cover rounded" />
        </div>
      )}
    </div>
    <div className="flex flex-wrap justify-around p-4">
      {buttons.map((button, index) => (
        <button key={index} className="bg-red-600 text-white px-4 py-2 rounded m-1 hover:bg-red-700 transition duration-300">
          {button}
        </button>
      ))}
    </div>
  </div>
);

const DonationCards = ({cardsData}) => {


  return (
    <div className="container mx-auto p-4">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default DonationCards;