import useNumberFormatter from "../../hooks/useNumberFormatter";

const TableBody = ({ product, index }) => {
  const { name, price, photo, _id, category, quantity, rating, previousPrice } =
    product || {};
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
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default TableBody;
