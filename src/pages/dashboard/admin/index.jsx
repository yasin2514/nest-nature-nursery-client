import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";

const AdminDashboard = () => {
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Home"} />
      <div className="mt-10 grid grid-cols-12 gap-8">
        <Box value={10} title={"Total Users"} className={"bg-[#2c8d2c]"} />
        <Box value={10} title={"Total Users"} className={"bg-[#16a7c0]"} />
        <Box value={10} title={"Total Users"} className={"bg-[#786fc4]"} />
        <Box value={10} title={"Total Users"} className={"bg-[#ce4b3a]"} />
      </div>
      <div className="grid grid-cols-12 mt-10 gap-8">
        <div className="bg-white col-span-8 p-5 rounded-lg shadow-md h-[calc(100vh-400px)]">text</div>
        <div className="bg-white col-span-4 p-5 rounded-lg shadow-md h-[calc(100vh-400px)]">text</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
