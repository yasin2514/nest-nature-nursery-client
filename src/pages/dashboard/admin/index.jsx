import Box from "../../../components/dashboard/Box";
import BreadCum from "../../../components/dashboard/BreadCum";

const AdminDashboard = () => {
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Home"} />
      <div className="mt-10 grid grid-cols-12 gap-8">
        <Box value={10} title={"Total Users"} className={"bg-[#22661d]"} />
        <Box value={10} title={"Total Users"} className={"bg-[#007bac]"} />
        <Box value={10} title={"Total Users"} className={"bg-[#824a00]"} />
        <Box value={10} title={"Total Users"} className={"bg-[#00a2ff]"} />
      </div>
    </div>
  );
};

export default AdminDashboard;
