import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { _id, name, price, photo, rating, previousPrice } = data;

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
            <button className="button-green rounded-full">Buy Now</button>
            <Link to={`/plant-details/${_id}`}>
              {" "}
              <button className="button-green rounded-full">See Details</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
