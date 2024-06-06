import useAdmin from "../../hooks/useAdmin";
import useSuperAdmin from "../../hooks/useSuperAdmin";
import useUser from "../../hooks/useUser";
import AdminDashboard from "./admin";
import UserDashboard from "./user";

const DashboardHome = () => {
  const [isSuperAdmin] = useSuperAdmin();
  const [isAdmin] = useAdmin();
  const [isUser] = useUser();
  return (
    <>
      {(isSuperAdmin || isAdmin) && <AdminDashboard />}
      {isUser && <UserDashboard />}
    </>
  );
};

export default DashboardHome;
