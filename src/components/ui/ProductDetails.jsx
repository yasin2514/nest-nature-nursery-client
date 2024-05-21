import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import ShortBanner from "./ShortBanner";
import Container from "./Container";
import ImageZoom from "./ImageZoom";
import useNumberFormatter from "../../hooks/useNumberFormatter";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    name,
    price,
    photo,
    category,
    quantity,
    rating,
    previousPrice,
    description,
  } = product || {};
  console.log({ price });

  const [selectedImage, setSelectedImage] = useState(photo?.[0]);
  const formatNumber = useNumberFormatter();
  return (
    <div>
      <ShortBanner
        banner={"all-plants-banner"}
        header={`${name} Details`}
        text={`Buy ${name} at an affordable price. See the details below.`}
      />
      <Container className={"grid grid-cols-1 md:grid-cols-2 gap-8 py-20"}>
        <div className="flex flex-col justify-center items-center">
          <ImageZoom src={selectedImage} alt={name} />
          <div className="flex space-x-5 mt-4">
            {photo?.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md "
              >
                <img
                  src={photo}
                  alt={`${name} ${index}`}
                  className="object-cover size-20 cursor-pointer transition-transform duration-300 transform hover:scale-105 "
                  onClick={() => setSelectedImage(photo)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className=" max-h-[450px] h-full overflow-auto">
            <h1 className="text-3xl font-bold text-green-800">{name}</h1>
            <p className="mt-4 text-gray-600">{description}</p>
            <div className="flex items-center mt-4">
              <span className="text-2xl font-semibold text-green-600">
                ${formatNumber(price)}
              </span>
              {previousPrice && (
                <span className="text-lg line-through text-gray-500 ml-4">
                  ${formatNumber(previousPrice)}
                </span>
              )}
            </div>
            <div className="mt-4">
              <span className="text-lg font-medium text-gray-700">
                Category: <span className="text-green-600">{category}</span>
              </span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-medium text-gray-700">
                Available Quantity:{" "}
                <span className="text-green-600">{formatNumber(quantity)}</span>
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-lg font-medium text-gray-700 mr-2">
                Rating:
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 ${
                      index < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.716 4.677a1 1 0 00.95.69h4.897c.556 0 .791.684.357 1.011l-3.978 2.885a1 1 0 00-.364 1.118l1.716 4.677c.197.536-.411.982-.894.658l-3.978-2.885a1 1 0 00-1.176 0l-3.978 2.885c-.483.324-1.091-.122-.894-.658l1.716-4.677a1 1 0 00-.364-1.118L2.128 9.305c-.434-.327-.199-1.011.357-1.011h4.897a1 1 0 00.95-.69l1.716-4.677z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 space-x-5">
            <button className="button-green">Add Cart</button>
            <Link>
              <button className="button-red">
                Buy now{" "}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
