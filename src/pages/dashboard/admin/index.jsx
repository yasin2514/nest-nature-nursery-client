import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";
import PieChart from "../../../components/dashboard/PieChart";

const AdminDashboard = () => {
  return (
    <div className=" h-full">
      <BreadCum text1={"Admin Dashboard"} text2={"Home"} />
      <div className="flex flex-col justify-around h-[calc(100vh-180px)]">
        <div className="mt-10 grid grid-cols-12 gap-8">
          <Box value={10} title={"Total Users"} className={"bg-[#2c8d2c]"} />
          <Box value={10} title={"Total Users"} className={"bg-[#16a7c0]"} />
          <Box value={10} title={"Total Users"} className={"bg-[#786fc4]"} />
          <Box value={10} title={"Total Users"} className={"bg-[#ce4b3a]"} />
        </div>
        <div className="grid grid-cols-12  gap-8 mt-10">
          <div className="bg-white col-span-8 p-5 rounded-lg shadow-md "></div>

          {/* for pie chart */}
          <div className="bg-white col-span-4 px-5 py-8 rounded-lg shadow-md h-auto  flex flex-col justify-center items-center gap-5">
            <PieChart />
            <div className="text-center">
              <p className="text-center text max-w-[20ch] mx-auto text-gray-700 font-semibold">
                Summary based on categories of plants sold in the last 30 days
              </p>
              <h2 className="text-center text-2xl text-green-800 font-semibold">
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
