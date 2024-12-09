import React from 'react';

interface ProductProps {
  rating: number;
}

const RatingStars: React.FC<ProductProps> = ({ rating }) => {
  // converting rating into filled stars
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <svg
          key={starIndex}
          className={`h-5 w-5 mx-0.5 ${
            starIndex <= filledStars
              ? 'text-yellow-400' // filled star
              : 'text-gray-300'   // empty star
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.98a1 1 0 00.95.69h4.185c.969 0 1.371 1.24.659 1.81l-3.386 2.45a1 1 0 00-.364 1.118l1.287 3.979c.3.921-.755 1.688-1.54 1.118l-3.386-2.45a1 1 0 00-1.176 0l-3.386 2.45c-.784.57-1.84-.197-1.54-1.118l1.287-3.979a1 1 0 00-.364-1.118l-3.386-2.45c-.712-.571-.31-1.81.659-1.81h4.185a1 1 0 00.95-.69l1.287-3.98z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
