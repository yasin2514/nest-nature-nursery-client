import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetProducts from "../../hooks/useGetProducts";
import useGetDataUploadedByAdmin from "../../hooks/useGetDataUploadedByAdmin";
import Swal from "sweetalert2";

const AdminProductListTable = ({ data, index, show }) => {
  const formatNumber = useNumberFormatter();
  const axiosSecure = useAxiosSecure();
  const [, , refetchAll] = useGetProducts();
  const [, , refetchAdmin] = useGetDataUploadedByAdmin();
  const {
    name,
    price,
    photos,
    _id,
    category,
    quantity,
    uploadByEmail,
    edited,
  } = data || {};

  // delete user
  const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure to delete this Plant?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`deleteProduct/${id}`).then((response) => {
          if (response.data.deletedCount) {
            show === "adminList" && refetchAll();
            show === "myList" && refetchAdmin();
            Swal.fire("Deleted!", "Product has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <tr title={quantity <= 10 && "Warning: Please Update Quantity"}>
      <td className="text-center">{index + 1}</td>
      <td className="flex items-center justify-center">
        <img src={photos?.[0]} alt="plant image" className="size-16 rounded" />
      </td>
      <td className="text-center">
        {name} <span className="text-green-600">{edited && "(Updated)"}</span>
      </td>
      <td className="text-center">{category}</td>
      <td className="text-center">{formatNumber(price)}</td>
      <td className={`text-center ${quantity <= 10 && "text-red-700 "}`}>
        {formatNumber(quantity)}
      </td>
      {show === "adminList" && (
        <td className="text-center max-w-[17ch]">{uploadByEmail}</td>
      )}
      {(show === "adminList" || show === "myList") && (
        <td className="text-center">
          <div className="flex items-center justify-center gap-3 ">
            <Link to={`/dashboard/products/update/${_id}`}>
              <FaEdit className="text-2xl text-green-700 hover:text-green-500" />
            </Link>
            <button className="p-0 border-0" onClick={() => handleDelete(_id)}>
              <AiFillDelete className="text-2xl text-red-700 hover:text-red-500" />
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

export default AdminProductListTable;
