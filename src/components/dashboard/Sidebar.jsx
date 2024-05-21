import AdminSidebar from "./AdminSidebar";
import UserSidebar from "./UserSidebar";

const Sidebar = () => {
  const admin = true;
  const user = false;
  return (
    <div>
      {admin && <AdminSidebar />}
      {user && <UserSidebar />}
    </div>
  );
};

export default Sidebar;
