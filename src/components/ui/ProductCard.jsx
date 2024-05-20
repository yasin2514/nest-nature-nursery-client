import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const { name, price, photo, rating, previousPrice } = data;

  const [isHovered, setIsHovered] = useState(false);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating); // round rating to nearest whole number
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden outline outline-[#01352c] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-64 overflow-hidden rounded">
        <img className="w-full object-cover h-full" src={photo} alt={name} />
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-4 transition-all duration-300 transform ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex justify-between items-center mb-2">
          <div>
            {previousPrice && (
              <span className="text-sm line-through text-gray-500 mr-2">
                ${previousPrice}
              </span>
            )}
            <span className="text-lg font-semibold text-green-500">
              ${price}
            </span>
          </div>
          <div>
            {isHovered && (
              <div className="flex items-center">
                {renderStars(rating)}
                <span className="ml-2 text-gray-600">{rating}</span>
              </div>
            )}
          </div>
        </div>
        {isHovered && (
          <div className="flex justify-between">
            <button className="bg-green-500 hover:bg-green-700 hover:text-white font-bold py-2 px-4 rounded-full border-0">
              Buy Now
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 hover:text-black text-gray-800 font-bold py-2 px-4 rounded-full border-0">
              See Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
