import AdminSidebar from "../../pages/dashboard/admin/AdminSidebar";
import UserSidebar from "../../pages/dashboard/user/UserSidebar";

const Sidebar = () => {
  const admin = true;
  const user = false;
  return (
    <>
      {admin && <AdminSidebar />}
      {user && <UserSidebar />}
    </>
  );
};

export default Sidebar;
