import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSuperAdmin = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { data: isSuperAdmin, isLoading } = useQuery({
     queryKey: ["isSuperAdmin", user?.email],
     enabled:!loading,
     queryFn: async () => {
       const res = await axiosSecure.get(`users/superAdmin/${user?.email}`);
       return res.data;
     },
   });

   return [isSuperAdmin, isLoading];
};

export default useSuperAdmin;