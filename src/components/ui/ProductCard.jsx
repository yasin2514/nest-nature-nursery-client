import { useState } from "react";
import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import useRating from "../../hooks/useRating";

const ProductCard = ({ data }) => {
  const { _id, name, price, photos, rating, previousPrice } = data || {};

  const [isHovered, setIsHovered] = useState(false);
  const formatNumber = useNumberFormatter();
  const renderRating = useRating();

  return (
    <div
      className="max-w-sm rounded overflow-hidden outline outline-[#01352c] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-64 overflow-hidden rounded">
        <img
          className="w-full object-cover h-full"
          src={photos?.[0]}
          alt={name}
        />
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
                ${formatNumber(previousPrice)}
              </span>
            )}
            <span className="text-lg font-semibold text-green-500">
              ${formatNumber(price)}
            </span>
          </div>
          <div>
            {isHovered && (
              <div className="flex items-center">
                {renderRating(rating)}
                <span className="ml-2 text-gray-600">{rating}</span>
              </div>
            )}
          </div>
        </div>
        {isHovered && (
          <div className="flex justify-between">
            <button className="button-green rounded-full">Add Cart</button>
            <Link to={`/plant-details/${_id}`}>
              {" "}
              <button className="button-red rounded-full">See Details</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
