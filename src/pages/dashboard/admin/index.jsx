import BarChartComponent from "../../../components/dashboard/BarChartComponent";
import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";
import PieChart from "../../../components/dashboard/PieChart";
import useGetCartProducts from "../../../hooks/useGetCartProducts";
import useGetDataUploadedByAdmin from "../../../hooks/useGetDataUploadedByAdmin";
import useGetPaymentInfo from "../../../hooks/useGetPaymentInfo";
import useGetProducts from "../../../hooks/useGetProducts";
import useGetPurchaseItem from "../../../hooks/useGetPurchaseItem";
import useNumberFormatter from "../../../hooks/useNumberFormatter";

const AdminDashboard = () => {
  const [products] = useGetProducts();
  const [myProducts] = useGetDataUploadedByAdmin();
  const [paymentData] = useGetPaymentInfo();
  const [pendingCart] = useGetCartProducts();
  const [purchaseItems] = useGetPurchaseItem();
  const formatNumber = useNumberFormatter();

  const totalSellAmount = paymentData.reduce((acc, item) => {
    return acc + item?.totalAmount;
  }, 0);
  const totalDueAmount = paymentData.reduce((acc, item) => {
    return acc + item?.totalDue;
  }, 0);

  const pendingDelivery = paymentData?.filter(
    (item) => item?.delivery === "Pending"
  );
  const completedDelivery = paymentData?.filter(
    (item) => item?.delivery === "Success"
  );
  return (
    <div className=" h-full">
      <BreadCum text1={"Admin Dashboard"} text2={"Home"} />
      <div className="flex flex-col justify-around h-[calc(100vh-165px)]">
        <div className="mt-6 grid grid-cols-12 gap-8">
          <Box
            value={myProducts?.length || 0}
            title={"My Products"}
            className={"bg-[#2c8d2c]"}
          />
          <Box
            value={products?.length || 0}
            title={"Total Products"}
            className={"bg-[#16a7c0]"}
          />
          <Box
            value={`$${formatNumber(totalSellAmount || 0)}`}
            title={"Total Sell Amount"}
            className={"bg-[#786fc4]"}
          />
          <Box
            value={`$${formatNumber(totalDueAmount || 0)}`}
            title={"Total Due Amount"}
            className={"bg-[#ce4b3a]"}
          />
        </div>
        <div className="mt-6 grid grid-cols-12 gap-8">
          <Box
            value={pendingCart?.length || 0}
            title={"Unprocessed Orders"}
            className={"bg-[#786fc4]"}
          />
          <Box
            value={purchaseItems?.length || 0}
            title={"Completed Orders"}
            className={"bg-[#ce4b3a]"}
          />
          <Box
            value={pendingDelivery?.length || 0}
            title={"Pending Delivery"}
            className={"bg-[#2c8d2c]"}
          />
          <Box
            value={completedDelivery?.length || 0}
            title={"Completed Delivery"}
            className={"bg-[#16a7c0]"}
          />
        </div>

        <div className="grid grid-cols-12  gap-8 mt-9">
          {/* for sales chart */}
          <div className="bg-white col-span-8 py-10 rounded-lg shadow-md flex flex-col items-center justify-center gap-2">
            <BarChartComponent />
            <h2 className="text-xl text-green-800 font-semibold">
              Weekly Sales Chart
            </h2>
          </div>

          {/* for pie chart */}
          <div className="bg-white col-span-4 py-10 rounded-lg shadow-md h-auto  flex flex-col justify-center items-center gap-5">
            <PieChart />
            <div className="text-center space-y-5">
              <p className="text-center text max-w-[20ch] mx-auto text-gray-700 font-semibold">
                Summary based on categories of plants sold in the last 30 days
              </p>
              <h2 className="text-center text-xl text-green-800 font-semibold">
                Sales Summary Chart
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
