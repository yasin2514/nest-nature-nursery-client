import BreadCum from "./BreadCum";

const StripePayment = ({data}) => {
 console.log({data});

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Stripe Payment"} />
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto "></div>
    </div>
  );
};

export default StripePayment;