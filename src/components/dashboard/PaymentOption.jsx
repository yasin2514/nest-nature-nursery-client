import { Link } from "react-router-dom";
import useNumberFormatter from "../../hooks/useNumberFormatter";
const PaymentOption = ({ data, paymentOption }) => {
  const formatNumber = useNumberFormatter();
  const amount = data?.reduce((acc, item) => acc + item?.totalAmount, 0);

  return (
    <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto ">
      <div className="text-end text-2xl font-semibold text-green-700">
        <span>Total Amount: $ {formatNumber(amount)}</span>
      </div>
      <div className="flex gap-16 justify-between h-[30vh] items-end">
        {paymentOption.map((item, index) => (
          <Link
            to={item?.path}
            key={index}
            className="border w-full hover:outline hover:outline-lime-800 h-32 p-5 rounded-md shadow-md "
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-full w-full object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaymentOption;
