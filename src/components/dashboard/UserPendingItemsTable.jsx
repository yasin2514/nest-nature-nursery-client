import Swal from "sweetalert2";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";
import useGetCartProducts from "../../hooks/useGetCartProducts";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const UserPendingItemsTable = ({ data, index }) => {
  const formatNumber = useNumberFormatter();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useGetCartDataByUser();
  const [, , refetchAll] = useGetCartProducts();
  const { _id, name, price, photos, quantity, edited } = data || {};
  const [count, setCount] = useState(quantity);

  const handleIncrementCount = () => {
    setCount((pre) => pre + 1);
  };
  const handleDecrementCount = () => {
    if (count > 1) setCount((pre) => pre - 1);
  };

  // delete cart product
  const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure to Remove this Plant?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`deleteCart/${id}`).then((response) => {
          console.log({ response });
          if (response.data.result.deletedCount > 0) {
            refetchAll();
            refetch();
            Swal.fire("Deleted!", "Product has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="flex items-center justify-center">
        <img src={photos?.[0]} alt="plant image" className="size-16 rounded" />
      </td>
      <td className="text-center">
        {name} <span className="text-green-600">{edited && "(Updated)"}</span>
      </td>
      <td className="text-center">$ {formatNumber(price)}</td>
      <td className="w-[10%] text-center">
        <div className="flex justify-center items-center">
          <button
            onClick={handleDecrementCount}
            disabled={count === 1}
            className="btn btn-sm text-red-500 hover:text-red-600"
          >
            <FaMinus />
          </button>
          <span className="w-16 ">{formatNumber(count)}</span>
          <button
            onClick={handleIncrementCount}
            className="btn btn-sm text-green-500 hover:text-green-600"
          >
            <FaPlus />
          </button>
        </div>
      </td>
      <td className="text-center">$ {formatNumber(price * count)}</td>

      <td className="text-center  w-[20%] m-0 p-0 space-x-3">
        <button className="btn btn-sm btn-success text-white hover:text-gray-50">
          Make Payment
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error text-white hover:text-gray-50"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UserPendingItemsTable;
