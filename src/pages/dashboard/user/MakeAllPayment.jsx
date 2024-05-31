import { useLoaderData } from "react-router-dom";
import BreadCum from "../../../components/dashboard/BreadCum";

const MakeAllPayment = () => {
    const item = useLoaderData();
    console.log({ item });
    return (
      <div>
        <BreadCum text1={"User Dashboard"} text2={"Make Payment"} />
      </div>
    );
};

export default MakeAllPayment;