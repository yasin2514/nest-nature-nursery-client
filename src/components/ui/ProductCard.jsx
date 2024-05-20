import { FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const {
    _id,
    name,
    price,
    photo,
    category,
    quantity,
    rating,
    description,
    previousPrice,
  } = data;

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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <div className="h-64 overflow-hidden">
        <img className="w-full object-cover h-full" src={photo} alt={name} />
      </div>
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base flex-grow">{description}</p>
        <div className="flex items-center my-2">
          {renderStars(rating)}
          <span className="ml-2 text-gray-600">{rating}</span>
        </div>
        <div className="pt-4">
          <span className="text-lg font-semibold text-green-500">${price}</span>
          {previousPrice && (
            <span className="text-sm line-through text-gray-500 ml-2">
              ${previousPrice}
            </span>
          )}
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
