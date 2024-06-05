import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetPaymentInfo from "../../hooks/useGetPaymentInfo";
import useGetPaymentInfoByUser from "../../hooks/useGetPaymentInfoByUser";

const PaymentInfoTable = ({ data, index, others }) => {
  const formatNumber = useNumberFormatter();
  const axiosSecure = useAxiosSecure();
  const [, , refetchPaymentInfo] = useGetPaymentInfo();
  const [, , refetchPaymentInfoUser] = useGetPaymentInfoByUser();
  const { _id, paymentId, totalAmount, delivery, paymentStatus, purchaseDate } =
    data || {};

  // make delivered
  const handleDelivered = () => {
    const updatePurchase = {
      delivery: "Success",
      paymentStatus: "Paid",
      paidAmount: totalAmount,
      totalDue: 0,
    };
    Swal.fire({
      title: `Are you sure to Make Delivered?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`updatePurchase/${_id}`, updatePurchase)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetchPaymentInfo();
              refetchPaymentInfoUser();
              Swal.fire(
                "Delivered!",
                "Product has been Delivery Successfully.",
                "success"
              );
            }
          });
      }
    });
  };

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
      <td className="text-center">{purchaseDate?.slice(0, 10)}</td>
      <td
        className={`text-center font-semibold ${
          delivery === "Pending" ? "text-red-600" : "text-green-600"
        }`}
      >
        {delivery}
      </td>
      <td className=" text-center  space-x-3 py-4  max-w-[190px]  w-auto ">
        {others && (
          <button
            onClick={handleDelivered}
            title="Click Here to Make Delivered"
            className="btn btn-sm btn-success text-white hover:text-white"
            disabled={delivery === "Success"}
          >
            Make Delivered
          </button>
        )}
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
