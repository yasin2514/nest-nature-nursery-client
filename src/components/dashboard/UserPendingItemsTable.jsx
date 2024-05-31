import Swal from "sweetalert2";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";
import useGetCartProducts from "../../hooks/useGetCartProducts";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const UserPendingItemsTable = ({ data, index }) => {
  const formatNumber = useNumberFormatter();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useGetCartDataByUser();
  const [, , refetchAll] = useGetCartProducts();
  const { _id, name, price, photos, quantity, edited } =
    data || {};
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

  // update cart product
  const handleUpdate = (id, countValue) => {
    axiosSecure
      .patch(`updateCartItem/${id}`, {
        quantity: countValue,
        totalAmount: countValue * price,
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetchAll();
          refetch();
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
            onClick={() => {
              handleDecrementCount();
              handleUpdate(_id, count - 1);
            }}
            disabled={count === 1}
            className="btn btn-sm text-red-500 hover:text-red-600"
          >
            <FiMinus />
          </button>
          <span className="w-16 ">{formatNumber(count)}</span>
          <button
            onClick={() => {
              handleIncrementCount();
              handleUpdate(_id, count + 1);
            }}
            className="btn btn-sm text-green-500 hover:text-green-600"
          >
            <FiPlus />
          </button>
        </div>
      </td>
      <td className="text-center">$ {formatNumber(count * price)}</td>

      <td className="text-center  w-[20%] m-0 p-0 space-x-3">
        <button className="button-payment">Make Payment</button>
        <button onClick={() => handleDelete(_id)} className="button-remove">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UserPendingItemsTable;
