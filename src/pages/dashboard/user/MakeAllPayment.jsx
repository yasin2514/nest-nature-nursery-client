import BreadCum from "../../../components/dashboard/BreadCum";
import PaymentOption from "../../../components/dashboard/PaymentOption";
import useGetCartDataByUser from "../../../hooks/useGetCartDataByUser";

const MakeAllPayment = () => {
  const [items] = useGetCartDataByUser();

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Make Payment"} />
      <PaymentOption data={items} />
    </div>
  );
};

export default MakeAllPayment;
