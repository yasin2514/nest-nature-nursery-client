import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";
import StripePayment from "./StripePayment";

const StripeAllPayment = () => {
  const [items] = useGetCartDataByUser();
  return <StripePayment data={items} isDelete={"all"}/>;
};

export default StripeAllPayment;
