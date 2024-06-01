import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetPurchaseItem = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: purchaseData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["purchaseItem"],
    queryFn: async () => {
      const res = await axiosSecure.get("purchases");
      return res.data;
    },
  });
  return [purchaseData, isLoading, refetch];
};

export default useGetPurchaseItem;
