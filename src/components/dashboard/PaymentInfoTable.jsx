import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";

const PaymentInfoTable = ({ data, index }) => {
  const formatNumber = useNumberFormatter();

  const {
    _id,
    paymentId,
    totalAmount,
    delivery,
    paymentStatus,
    purchaseDate,
  } = data || {};
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{paymentId || null}</td>
      <td className="text-center">${formatNumber(totalAmount)}</td>

      <td
        className={`text-center font-semibold ${
          paymentStatus === "Paid" ? "text-green-600" : "text-red-600"
        }`}
      >
        {paymentStatus || null}
      </td>
      <td className="text-center">{purchaseDate.slice(0, 10)}</td>
      <td
        className={`text-center font-semibold ${
          delivery === "Pending" ? "text-red-600" : "text-green-600"
        }`}
      >
        {delivery}
      </td>
      <td className=" flex justify-center py-4">
        <Link
          to={`/dashboard/payment-details/${_id}`}
          className="btn btn-sm btn-success text-white"
        >
          See Details
        </Link>
      </td>
    </tr>
  );
};

export default PaymentInfoTable;
