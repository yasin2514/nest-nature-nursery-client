import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useGetCartDataByUser = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const URL = `cart/${user?.email}`;
  const {
    data: userPendingItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart-user-products", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(URL);
      return res.data;
    },
  });
  return [userPendingItems, isLoading, refetch];
};

export default useGetCartDataByUser;
