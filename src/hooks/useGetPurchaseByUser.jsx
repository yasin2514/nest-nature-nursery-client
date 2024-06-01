import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetPurchaseByUser = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const URL = `purchasesItems/${user?.email}`;
  const {
    data: purchaseData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["purchaseItemByUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(URL);
      return res.data;
    },
  });
  return [purchaseData, isLoading, refetch];
};

export default useGetPurchaseByUser;
