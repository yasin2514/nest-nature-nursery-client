import AdminDashboard from "./admin";
import UserDashboard from "./user";

const DashboardHome = () => {
      const admin = true;
      const user = false;
    return (
        <div>
            {admin && <AdminDashboard/>}
            {user && <UserDashboard/>}
            
        </div>
    );
};

export default DashboardHome;