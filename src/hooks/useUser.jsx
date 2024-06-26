import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isUser, isLoading } = useQuery({
    queryKey: ["isUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/user/${user?.email}`);
      return res.data.user;
    },
  });

  return [isUser, isLoading];
};

export default useUser;
