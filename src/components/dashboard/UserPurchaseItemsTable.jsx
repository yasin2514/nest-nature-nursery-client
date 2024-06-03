import useNumberFormatter from "../../hooks/useNumberFormatter";

const UserPurchaseItemsTable = ({ data, index }) => {
  const formatNumber = useNumberFormatter();

  const {
    name,
    price,
    photos,
    quantity,
    totalAmount,
    delivery,
    paymentMethod,
    paymentStatus,
  } = data || {};
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="flex items-center justify-center">
        <img src={photos?.[0]} alt="plant image" className="size-16 rounded" />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">${formatNumber(price)}</td>
      <td className=" text-center">{formatNumber(quantity)}</td>
      <td className="text-center">${formatNumber(totalAmount)}</td>
      <td
        className={`text-center font-semibold ${
          delivery === "Pending" ? "text-red-600" : "text-green-600"
        }`}
      >
        {delivery}
      </td>
      <td className="text-center">{paymentMethod || null}</td>
      <td
        className={`text-center font-semibold ${
          paymentStatus === "Paid" ? "text-green-600" : "text-red-600"
        }`}
      >
        {paymentStatus || null}
      </td>
    </tr>
  );
};

export default UserPurchaseItemsTable;
