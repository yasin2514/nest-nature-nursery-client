import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";
import useUser from "../hooks/useUser";

const UserRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isUser, isUserLoading] = useUser();

  if (loading || isUserLoading) {
    return <Loading />;
  }
  if (user && isUser) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default UserRoute;
