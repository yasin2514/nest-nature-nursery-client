import BreadCum from "./BreadCum";

const SSLCommercePayment = ({data}) => {
   console.log({ data });

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"SSL Payment"} />
      <div className="bg-white flex items-center justify-center p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto ">
        <h1 className="text-3xl font-semibold">Up Coming Feature</h1>
      </div>
    </div>
  );
};

export default SSLCommercePayment;
