import { useLoaderData } from "react-router-dom";
import BreadCum from "../../../components/dashboard/BreadCum";
import PaymentOption from "../../../components/dashboard/PaymentOption";

const MakeSinglePayment = () => {
  const item = useLoaderData();
  const items = [item]
  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Make Payment"} />
      <PaymentOption data={items} />
    </div>
  );
};

export default MakeSinglePayment;
