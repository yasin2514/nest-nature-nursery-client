import AdminDashboard from "./admin";
import UserDashboard from "./user";

const DashboardHome = () => {
      const admin = false;
      const user = true;
    return (
        <>
            {admin && <AdminDashboard/>}
            {user && <UserDashboard/>}
            
        </>
    );
};

export default DashboardHome;