import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetProducts = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosSecure.get("products");
      return res.data;
    },
  });
  return [products, isLoading, refetch];
};

export default useGetProducts;
