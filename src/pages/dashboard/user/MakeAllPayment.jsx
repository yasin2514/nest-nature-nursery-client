import BreadCum from "../../../components/dashboard/BreadCum";
import PaymentOption from "../../../components/dashboard/PaymentOption";
import useGetCartDataByUser from "../../../hooks/useGetCartDataByUser";
import sslImg from "../../../assets/ssl.png";
import codImg from "../../../assets/cod.png";
import stripeImg from "../../../assets/stripe.png";
const MakeAllPayment = () => {
    const paymentOption = [
      {
        id: 1,
        name: "Stripe",
        img: stripeImg,
        path: "/dashboard/payment-gateway/stripe",
      },
      {
        id: 2,
        name: "Cash on Delivery",
        img: codImg,
        path: "/dashboard/payment-gateway/cod",
      },
      {
        id: 3,
        name: "SSL Commerz",
        img: sslImg,
        path: "/dashboard/payment-gateway/ssl",
      },
    ];
  const [items] = useGetCartDataByUser();

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Make Payment"} />
      <PaymentOption data={items} paymentOption={paymentOption} />
    </div>
  );
};

export default MakeAllPayment;
