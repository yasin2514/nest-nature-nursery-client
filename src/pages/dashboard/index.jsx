import AdminDashboard from "./admin";
import UserDashboard from "./user";

const DashboardHome = () => {
      const admin = true;
      const user = true;
    return (
        <>
            {admin && <AdminDashboard/>}
            {user && <UserDashboard/>}
            
        </>
    );
};

export default DashboardHome;