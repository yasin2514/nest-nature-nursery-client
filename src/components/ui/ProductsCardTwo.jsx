import { FiShoppingCart } from "react-icons/fi";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import useRating from "../../hooks/useRating";
import { FaShoppingCart } from "react-icons/fa";

const ProductsCardTwo = ({ data }) => {
  const { _id, name, price, photo, rating, previousPrice } = data;

  const formatNumber = useNumberFormatter();
  const renderRating = useRating();

  return (
    <div className="border rounded-lg hover:shadow-lg shadow-green-700  ">
      <div className="h-48 bg-gray-50  overflow-hidden ">
        <img
          src={photo[0]}
          alt={name}
          className="w-full h-full object-contain mb-4 hover:scale-110 duration-300"
        />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold mb-2">{name}</h4>
        <div className="flex items-center">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="space-x-3">
            <span className="text-gray-600 font-bold">${price}</span>
            <span className="text-gray-400 line-through">${previousPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-sm">
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardTwo;
