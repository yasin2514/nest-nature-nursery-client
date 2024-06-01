import { useLoaderData } from "react-router-dom";
import SSLCommercePayment from "./SSLCommercePayment";

const SslSinglePayment = () => {
  const item = useLoaderData();
  return <SSLCommercePayment data={[item]} />;
};

export default SslSinglePayment;
