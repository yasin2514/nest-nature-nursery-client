import AdminDashboard from "./admin";
import UserDashboard from "./user";

const DashboardHome = () => {
      const admin = true;
      const user = false;
    return (
        <>
            {admin && <AdminDashboard/>}
            {user && <UserDashboard/>}
            
        </>
    );
};

export default DashboardHome;