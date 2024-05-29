import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useGetProducts from "../../hooks/useGetProducts";
import useGetDataUploadedByAdmin from "../../hooks/useGetDataUploadedByAdmin";

const TableBody = ({ data, index, show }) => {
  const {
    name,
    price,
    photos,
    photo,
    _id,
    category,
    quantity,
    email,
    role,
    uploadByEmail,
    edited,
  } = data || {};
  const formatNumber = useNumberFormatter();
  const axiosSecure = useAxiosSecure();
  const [, , refetchAll] = useGetProducts();
  const [, , refetchAdmin] = useGetDataUploadedByAdmin();

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
    <>
      {(show === "adminList" || show === "myList") && (
        <tr>
          <td className="text-center">{index + 1}</td>
          <td className="flex items-center justify-center">
            <img
              src={photos?.[0]}
              alt="plant image"
              className="size-16 rounded"
            />
          </td>
          <td className="text-center">
            {name}{" "}
            <span className="text-green-600">{edited && "(Updated)"}</span>
          </td>
          <td className="text-center">{category}</td>
          <td className="text-center">{formatNumber(price)}</td>
          <td className="text-center">{formatNumber(quantity)}</td>
          {show === "adminList" && (
            <td className="text-center max-w-[17ch]">{uploadByEmail}</td>
          )}
          <td className="text-center">
            <div className="flex items-center justify-center gap-3 ">
              <Link to={`/dashboard/products/update/${_id}`}>
                <FaEdit className="text-2xl text-green-700 hover:text-green-500" />
              </Link>
              <button
                className="p-0 border-0"
                onClick={() => handleDelete(_id)}
              >
                <AiFillDelete className="text-2xl text-red-700 hover:text-red-500" />
              </button>
            </div>
          </td>
        </tr>
      )}
      {show === "userList" && (
        <tr>
          <td className="text-center">{index + 1}</td>
          <td className="flex items-center justify-center">
            <img
              src={photo}
              alt="plant image"
              className="size-12 rounded-full shadow shadow-green-900"
            />
          </td>
          <td className="text-center">{name}</td>
          <td className="text-center">{email}</td>
          <td
            className={`text-center uppercase font-semibold ${
              role === "user" ? "text-green-600" : "text-blue-600 "
            }`}
          >
            {role}
          </td>
          <td className="text-center space-x-3">
            <button
              disabled={role === "admin"}
              className="btn btn-ghost  btn-sm hover:text-blue-700"
            >
              Make Admin
            </button>
            <button
              disabled={role === "admin"}
              className="btn btn-ghost btn-sm hover:text-green-700"
            >
              Make User
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableBody;
