import BarChartComponent from "../../../components/dashboard/BarChartComponent";
import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";
import PieChart from "../../../components/dashboard/PieChart";
import useGetDataUploadedByAdmin from "../../../hooks/useGetDataUploadedByAdmin";
import useGetProducts from "../../../hooks/useGetProducts";

const AdminDashboard = () => {
  const [products] = useGetProducts();
  const [myProducts] = useGetDataUploadedByAdmin();
  return (
    <div className=" h-full">
      <BreadCum text1={"Admin Dashboard"} text2={"Home"} />
      <div className="flex flex-col justify-around h-[calc(100vh-165px)]">
        <div className="mt-6 grid grid-cols-12 gap-8">
          <Box
            value={products?.length || 0}
            title={"Total Products"}
            className={"bg-[#2c8d2c]"}
          />
          <Box
            value={myProducts?.length || 0}
            title={"My Products"}
            className={"bg-[#16a7c0]"}
          />
          <Box value={10} title={"Completed Orders"} className={"bg-[#786fc4]"} />
          <Box
            value={10}
            title={"Total Sell Amount"}
            className={"bg-[#ce4b3a]"}
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
