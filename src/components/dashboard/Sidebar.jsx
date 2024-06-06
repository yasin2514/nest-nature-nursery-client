import useAdmin from "../../hooks/useAdmin";
import useSuperAdmin from "../../hooks/useSuperAdmin";
import useUser from "../../hooks/useUser";
import AdminSidebar from "../../pages/dashboard/admin/AdminSidebar";
import UserSidebar from "../../pages/dashboard/user/UserSidebar";

const Sidebar = () => {
  const [isSuperAdmin] = useSuperAdmin();
  const [isAdmin] = useAdmin();
  const [isUser] = useUser();
  return (
    <>
      {(isSuperAdmin || isAdmin) && <AdminSidebar />}
      {isUser && <UserSidebar />}
    </>
  );
};

export default Sidebar;
