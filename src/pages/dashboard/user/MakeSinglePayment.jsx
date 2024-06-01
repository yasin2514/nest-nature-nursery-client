import { useLoaderData } from "react-router-dom";
import BreadCum from "../../../components/dashboard/BreadCum";
import PaymentOption from "../../../components/dashboard/PaymentOption";
import sslImg from "../../../assets/ssl.png";
import codImg from "../../../assets/cod.png";
import stripeImg from "../../../assets/stripe.png";

const MakeSinglePayment = () => {
  const item = useLoaderData();
  const id = item?._id;
  const paymentOption = [
    {
      id: 1,
      name: "Stripe",
      img: stripeImg,
      path: `/dashboard/payment-gateway/stripe/${id}`,
    },
    {
      id: 2,
      name: "Cash on Delivery",
      img: codImg,
      path: `/dashboard/payment-gateway/cod/${id}`,
    },
    {
      id: 3,
      name: "SSL Commerz",
      img: sslImg,
      path: `/dashboard/payment-gateway/ssl/${id}`,
    },
  ];
  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Make Payment"} />
      <PaymentOption data={[item]} paymentOption={paymentOption} />
    </div>
  );
};

export default MakeSinglePayment;
