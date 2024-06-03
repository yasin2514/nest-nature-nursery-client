import useNumberFormatter from "../../hooks/useNumberFormatter";

const PaymentDetailsTable = ({ data, index }) => {
  const formatNumber = useNumberFormatter();

  const {
    name,
    price,
    photos,
    quantity,
    totalAmount,
    category,
  } = data || {};
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="flex items-center justify-center">
        <img src={photos?.[0]} alt="plant image" className="size-12 rounded" />
      </td>
      <td className="text-center">{name}</td>

      <td className="text-center">${formatNumber(price)}</td>
      <td className=" text-center">{formatNumber(quantity)}</td>
      <td className="text-center">${formatNumber(totalAmount)}</td>
      <td className="text-center">{category}</td>
    </tr>
  );
};

export default PaymentDetailsTable;
