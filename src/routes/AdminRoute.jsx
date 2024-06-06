import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import Loading from "../components/ui/Loading";
import useSuperAdmin from "../hooks/useSuperAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isSuperAdmin, isSuperAdminLoading] = useSuperAdmin();

  if (loading || isAdminLoading || isSuperAdminLoading) {
    return <Loading />;
  }
  if (user && (isAdmin || isSuperAdmin)) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
