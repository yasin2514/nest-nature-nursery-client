import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const TableBody = ({ product, index, show }) => {
  const { name, price, photo, _id, category, quantity } = product || {};
  const formatNumber = useNumberFormatter();

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="">
        <img src={photo?.[0]} alt="plant image" className="size-16 rounded" />
      </td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{formatNumber(price)}</td>
      <td>{formatNumber(quantity)}</td>
      {show === "adminList" && <td>{name}</td>}
      <td>
        <div className=" flex gap-3 ">
          <Link to={`/products/update/${_id}`}>
            <FaEdit className="text-2xl text-green-700 hover:text-green-500" />
          </Link>
          <button className="p-0 border-0 ">
            <AiFillDelete className="text-2xl text-red-700 hover:text-red-500" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
