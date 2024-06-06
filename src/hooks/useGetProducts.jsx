import { useQuery } from "@tanstack/react-query";
import useAxiosNormal from "./useAxiosNormal";

const useGetProducts = () => {
  const axiosNormal = useAxiosNormal();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosNormal.get("products");
      return res.data;
    },
  });
  return [products, isLoading, refetch];
};

export default useGetProducts;
