import { useLoaderData } from "react-router-dom";

const StripePaymentSingle = () => {
  const item = useLoaderData();
  console.log({ item });

  return <div>StripePaymentSingle</div>;
};

export default StripePaymentSingle;
