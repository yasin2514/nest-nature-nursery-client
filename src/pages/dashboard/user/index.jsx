import BarChartComponent from "../../../components/dashboard/BarChartComponent";
import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";
import PendingAndPurchaseChart from "../../../components/dashboard/PendingAndPurchaseChart";
import useGetCartDataByUser from "../../../hooks/useGetCartDataByUser";
import useNumberFormatter from "../../../hooks/useNumberFormatter";

const UserDashboard = () => {
  const [userPendingItems] = useGetCartDataByUser();
  const formatNumber = useNumberFormatter();

  const totalPendingAmount = userPendingItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className=" h-full">
      <BreadCum text1={"User Dashboard"} text2={"Home"} />
      <div className="flex flex-col justify-around h-[calc(100vh-165px)]">
        <div className="mt-6 grid grid-cols-12 gap-8">
          <Box
            value={userPendingItems?.length || 0}
            title={"Pending Items"}
            className={"bg-[#2c8d2c]"}
          />
          <Box
            value={`$${formatNumber(totalPendingAmount)}`}
            title={"Total Pending Amount"}
            className={"bg-[#786fc4]"}
          />
          <Box value={10} title={"Purchase Items"} className={"bg-[#ce4b3a]"} />
          <Box
            value={10}
            title={"Total Purchased Amount"}
            className={"bg-[#16a7c0]"}
          />
        </div>

        <div className="grid grid-cols-12  gap-8 mt-9">
          {/* for sales chart */}
          <div className="bg-white col-span-6 py-10 rounded-lg shadow-md flex flex-col items-center justify-center gap-2">
            <BarChartComponent />
            <h2 className="text-xl text-green-800 font-semibold">
              Purchase Items
            </h2>
          </div>

          {/* for sales chart */}
          <div className="bg-white col-span-6 py-10 rounded-lg shadow-md flex flex-col items-center justify-center gap-2">
            <PendingAndPurchaseChart />
            <h2 className="text-xl text-green-800 font-semibold">
              Pending and Purchase Ratio
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
