import BreadCum from "./BreadCum";
import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";

const CODPayment = () => {
    const [items] = useGetCartDataByUser();

  console.log({ items });
  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"COD Payment"} />
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto "></div>
    </div>
  );
};

export default CODPayment;
