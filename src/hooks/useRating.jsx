import { FaRegStar, FaStar } from "react-icons/fa";

// Function to render stars based on rating
const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);
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
const useRating = () => renderStars;

export default useRating;
