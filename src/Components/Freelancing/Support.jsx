import { useState } from 'react';

const Support = () => {
  // Static data for the cards
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      content: 'Additional content for Card 1.',
      image: 'https://picsum.photos/200/300?random=1', // Random image URL
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      content: 'Additional content for Card 2.',
      image: 'https://picsum.photos/200/300?random=2', // Random image URL
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3.',
      content: 'Additional content for Card 3.',
      image: 'https://picsum.photos/200/300?random=3', // Random image URL
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4.',
      content: 'Additional content for Card 4.',
      image: 'https://picsum.photos/200/300?random=4', // Random image URL
    },
    {
      title: 'Card 5',
      description: 'This is the description for Card 5.',
      content: 'Additional content for Card 5.',
      image: 'https://picsum.photos/200/300?random=5', // Random image URL
    },
    {
      title: 'Card 6',
      description: 'This is the description for Card 6.',
      content: 'Additional content for Card 6.',
      image: 'https://picsum.photos/200/300?random=6', // Random image URL
    },
    {
      title: 'Card 7',
      description: 'This is the description for Card 7.',
      content: 'Additional content for Card 7.',
      image: 'https://picsum.photos/200/300?random=7', // Random image URL
    },
    {
      title: 'Card 8',
      description: 'This is the description for Card 8.',
      content: 'Additional content for Card 8.',
      image: 'https://picsum.photos/200/300?random=8', // Random image URL
    },
    {
      title: 'Card 9',
      description: 'This is the description for Card 9.',
      content: 'Additional content for Card 9.',
      image: 'https://picsum.photos/200/300?random=9', // Random image URL
    },
    {
      title: 'Card 10',
      description: 'This is the description for Card 10.',
      content: 'Additional content for Card 10.',
      image: 'https://picsum.photos/200/300?random=10', // Random image URL
    },
  ];

  // State to track how many cards are displayed
  const [showMore, setShowMore] = useState(false);

  // Function to toggle between showing all or limited cards
  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  // Decide how many cards to show based on 'showMore' state
  const visibleCards = showMore ? cards : cards.slice(0, 8);

  return (
    <div className="max-w-full mx-auto p-4 px-[5vw]">
      <h1 className="text-center text-3xl font-bold text-white mb-8">Our Cards</h1>
      
      {/* Responsive grid system */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-l h-[15vh] from-[#727374] via-[#444546] to-[#203A43] shadow-md rounded-lg p-3 flex transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-1/3 object-cover rounded-lg"
            />
            <div className="ml-4 w-2/3">
              <h2 className="text-xl font-semibold text-white mb-2">{card.title}</h2>
              <p className="text-white mb-2">{card.description}</p>
              <p className="text-white">{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show "See More" button after the 8th card */}
      {cards.length > 8 && (
        <div className="text-center mt-6">
          <button
            onClick={handleSeeMoreClick}
            className="bg-[#203A43] text-white px-4 py-2 rounded-md"
          >
            {showMore ? 'Show Less' : 'See More →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Support;
