import { FiShoppingCart } from "react-icons/fi";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import useRating from "../../hooks/useRating";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useSuperAdmin from "../../hooks/useSuperAdmin";
import useAdmin from "../../hooks/useAdmin";

const ProductsCardTwo = ({ data }) => {
  const { name, price, photos, rating, previousPrice,quantity } = data;

  const formatNumber = useNumberFormatter();
  const renderRating = useRating();
  const axiosSecure = useAxiosSecure();
   const [isAdmin] = useAdmin();
   const [isSuperAdmin] = useSuperAdmin();
  const { user } = useAuth();
  const navigate = useNavigate();

    const handleAddToCart = (item) => {
      if (!user) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to login to Add Cart!",
        });
        navigate("/login");
      }
      const saveItem = {
        productId: item._id,
        name: item.name,
        price: item.price,
        photos: item.photos,
        category: item.category,
        quantity: 1,
        userName: user?.displayName,
        userEmail: user?.email,
        uploadByEmail: item.uploadByEmail,
      };
      axiosSecure.post("addCart", saveItem).then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Add to Cart Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    };


  return (
    <div className="border  overflow-hidden hover:shadow-lg shadow-green-700 h-[330px] ">
      <div className="h-48 bg-gray-100 overflow-hidden ">
        <img
          src={photos[0]}
          alt={name}
          className="w-full h-full object-contain mb-4 hover:scale-110 duration-300"
        />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold mb-2">{name}</h4>
        <div className="flex items-center">
          {renderRating(rating)}
          <span className="ml-2 text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="space-x-3">
            <span className="text-gray-600 font-bold">
              ${formatNumber(price)}
            </span>
            <span className="text-gray-400 line-through">
              ${formatNumber(previousPrice)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleAddToCart(data)}
              disabled={isAdmin || isSuperAdmin || quantity < 1 ? true : false}
              className="btn btn-sm"
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardTwo;
