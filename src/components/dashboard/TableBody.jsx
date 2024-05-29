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
          <td>{index + 1}</td>
          <td className="">
            <img
              src={photo?.[0]}
              alt="plant image"
              className="size-16 rounded"
            />
          </td>
          <td>{name}</td>
          <td>{category}</td>
          <td>{formatNumber(price)}</td>
          <td>{formatNumber(quantity)}</td>
          {show === "adminList" && <td>{name}</td>}
          <td>
            <div className=" flex gap-3 ">
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
          <td>{index + 1}</td>
          <td className="">
            <img
              src={photo}
              alt="plant image"
              className="size-16 rounded-full outline"
            />
          </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
        </tr>
      )}
    </>
  );
};

export default TableBody;
