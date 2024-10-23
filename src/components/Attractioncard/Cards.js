import React from 'react';
import './cards.css'; // Import CSS file for styles
import Imagecard1 from './citadel-of-erbi.jpg';
import Imagecard2 from './korek-mountains.jpg';
import Imagecard3 from './riverfronts-along-the-tigris-river.jpg';

const Cards = () => {
  const cards = [
    {
      title: "Card Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgSrc: Imagecard1, // Use the image directly
    },
    {
      title: "Card Title 2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      imgSrc: Imagecard2, // Use the image directly
    },
    {
      title: "Card Title 3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgSrc: Imagecard3, // Use the image directly
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={`Card Image ${index + 1}`} className="card__image" />
          <div className="card__content">
            <p className="card__title">{card.title}</p>
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
