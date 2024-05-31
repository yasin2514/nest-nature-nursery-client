import { useLoaderData } from "react-router-dom";
import BreadCum from "../../../components/dashboard/BreadCum";
import PaymentOption from "../../../components/dashboard/PaymentOption";

const MakeSinglePayment = () => {
  const item = useLoaderData();
  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Make Payment"} />
      <PaymentOption data={item} />
    </div>
  );
};

export default MakeSinglePayment;
