import { useLoaderData } from "react-router-dom";
import StripePayment from "./StripePayment";

const StripePaymentSingle = () => {
  const item = useLoaderData();
  return <StripePayment data={[item]} isDelete={"single"} />;
};

export default StripePaymentSingle;
