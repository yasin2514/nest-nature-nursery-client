import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetPurchaseItem = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: purchaseData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["purchaseItems"],
    queryFn: async () => {
      const res = await axiosSecure.get("purchasesItems");
      return res.data;
    },
  });
  return [purchaseData, isLoading, refetch];
};

export default useGetPurchaseItem;
