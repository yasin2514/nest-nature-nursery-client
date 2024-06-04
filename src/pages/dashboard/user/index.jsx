import BarChartComponent from "../../../components/dashboard/BarChartComponent";
import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";
import PendingAndPurchaseChart from "../../../components/dashboard/PendingAndPurchaseChart";
import useGetCartDataByUser from "../../../hooks/useGetCartDataByUser";
import useGetPaymentInfoByUser from "../../../hooks/useGetPaymentInfoByUser";
import useNumberFormatter from "../../../hooks/useNumberFormatter";

const UserDashboard = () => {
  const formatNumber = useNumberFormatter();
  const [userPendingItems] = useGetCartDataByUser();
  const [paymentUserData] = useGetPaymentInfoByUser();

  const totalCartAmount = userPendingItems?.reduce(
    (acc, item) => acc + item?.totalAmount,
    0
  );

  const totalPurchasedAmount = paymentUserData?.reduce(
    (acc, item) => acc + item?.totalAmount,
    0
  );
  const totalPaidAmount = paymentUserData?.reduce(
    (acc, item) => acc + item?.paidAmount,
    0
  );
  const totalDueAmount = paymentUserData?.reduce(
    (acc, item) => acc + item?.totalDue,
    0
  );

  return (
    <div className=" h-full">
      <BreadCum text1={"User Dashboard"} text2={"Home"} />
      <div className="flex flex-col justify-around h-[calc(100vh-165px)]">
        <div className="mt-6 grid grid-cols-12 gap-8">
          <Box
            value={`$${formatNumber(totalCartAmount || 0)}`}
            title={"Cart Pending Amount"}
            className={"bg-[#2c8d2c]"}
          />
          <Box
            value={`$${formatNumber(totalPurchasedAmount || 0)}`}
            title={"Purchased Amount"}
            className={"bg-[#786fc4]"}
          />
          <Box
            value={`$${formatNumber(totalPaidAmount || 0)}`}
            title={"Paid Amount"}
            className={"bg-[#ce4b3a]"}
          />
          <Box
            value={`$${formatNumber(totalDueAmount || 0)}`}
            title={"Due Amount"}
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
