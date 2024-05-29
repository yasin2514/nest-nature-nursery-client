import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const TableBody = ({ data, index, show }) => {
  const { name, price, photo, _id, category, quantity, email, role } =
    data || {};
  const formatNumber = useNumberFormatter();

  return (
    <>
      {(show === "adminList" || show === "myList") && (
        <tr>
          <td className="text-center">{index + 1}</td>
          <td className="flex items-center justify-center">
            <img
              src={photo?.[0]}
              alt="plant image"
              className="size-16 rounded"
            />
          </td>
          <td className="text-center">{name}</td>
          <td className="text-center">{category}</td>
          <td className="text-center">{formatNumber(price)}</td>
          <td className="text-center">{formatNumber(quantity)}</td>
          {show === "adminList" && <td className="text-center">{name}</td>}
          <td className="text-center">
            <div className="flex items-center justify-center gap-3 ">
              <Link to={`/dashboard/products/update/${_id}`}>
                <FaEdit className="text-2xl text-green-700 hover:text-green-500" />
              </Link>
              <button className="p-0 border-0 ">
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
