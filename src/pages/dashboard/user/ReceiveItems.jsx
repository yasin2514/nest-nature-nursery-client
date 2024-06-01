import BreadCum from "../../../components/dashboard/BreadCum";

const ReceiveItems = () => {
    return (
      <div>
        <BreadCum text1={"User Dashboard"} text2={"Receive Items"} />
        <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto "></div>
      </div>
    );
};

export default ReceiveItems;